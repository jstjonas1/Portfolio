import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private http = inject(HttpClient);
  
  @ViewChild('contactForm') contactForm!: NgForm;
  
  formData: ContactFormData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  isSubmitting: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.showSuccess = false;
    this.showError = false;
    
    try {
      // Send email using Formspree (free email service)
      const formspreeEndpoint = 'https://formspree.io/f/mpwyovvq';
      
      const emailData = {
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message,
        _replyto: this.formData.email,
        _subject: `Portfolio Contact from ${this.formData.name}`
      };

      await this.http.post(formspreeEndpoint, emailData, {
        headers: new HttpHeaders({
          'Accept': 'application/json'
        })
      }).toPromise();
      
      this.showSuccess = true;
      this.resetForm();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccess = false;
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      this.showError = true;
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        this.showError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.message.trim() &&
      this.formData.privacy &&
      this.isValidEmail(this.formData.email)
    );
  }

  private isValidEmail(email: string): boolean {
    // Prüfung: mindestens 1 Buchstabe vor @, @ vorhanden, mindestens 1 Buchstabe nach @,
    // dann ein Punkt, dann mindestens 1 Buchstabe
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]+$/;
    return emailRegex.test(email.trim());
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      message: '',
      privacy: false
    };
    
    // Reset form validation state
    if (this.contactForm) {
      this.contactForm.resetForm();
    }
  }
}
