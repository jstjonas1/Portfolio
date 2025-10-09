import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData: ContactFormData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  isSubmitting: boolean = false;

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    try {
      console.log('Form submitted:', this.formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to a backend service
      // Example: await this.contactService.sendMessage(this.formData);
      
      this.showSuccessMessage();
      this.resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      this.showErrorMessage();
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
  }

  private showSuccessMessage(): void {
    // You could use a toast service here instead of alert
    alert('Thank you for your message! I will get back to you soon.');
  }

  private showErrorMessage(): void {
    alert('Sorry, there was an error sending your message. Please try again.');
  }
}
