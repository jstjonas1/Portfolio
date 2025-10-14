import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact from ${this.formData.name}`);
      const body = encodeURIComponent(
        `Name: ${this.formData.name}\n` +
        `Email: ${this.formData.email}\n\n` +
        `Message:\n${this.formData.message}`
      );
      const mailtoLink = `mailto:jstjonas@gmx.de?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Wait a moment for the email client to open
      await new Promise(resolve => setTimeout(resolve, 500));
      
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
