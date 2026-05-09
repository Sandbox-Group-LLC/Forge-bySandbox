import React, { useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useLeadForm } from '@/hooks/useLeadForm.js';
import { useToast } from '@/components/ui/use-toast.js';
import { CheckCircle2 } from 'lucide-react';

const LeadFormModal = ({ isOpen, onClose }) => {
  const { formData, errors, isLoading, isSubmitted, handleChange, handleSubmit, resetForm } = useLeadForm();
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      toast({
        title: 'Success!',
        description: 'Thank you for your interest. We\'ll be in touch soon!',
      });
      
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  }, [handleSubmit, onClose, toast]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-navy">Let's Talk</DialogTitle>
              <DialogDescription className="text-base">
                Tell us about your project and we'll get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-900"
                    disabled={isLoading}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-900"
                    disabled={isLoading}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-900"
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-900"
                  disabled={isLoading}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-900"
                  disabled={isLoading}
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>
                )}
              </div>

              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Size *
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-900"
                  disabled={isLoading}
                >
                  <option value="">Select company size</option>
                  <option value="SMB">SMB (Small/Medium Business)</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
                {errors.companySize && (
                  <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>
                )}
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your project (Optional)
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-900 resize-y"
                  disabled={isLoading}
                  placeholder="Share some details about what you're looking to build..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-3"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <DialogTitle className="text-2xl font-bold text-navy mb-2">Thank You!</DialogTitle>
            <DialogDescription className="text-base">
              We've received your information and will be in touch within 24 hours.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormModal;