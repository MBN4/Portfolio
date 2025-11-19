import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextarea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, isTextarea = false, id, ...props }) => {
  const commonClasses = "w-full bg-gray-800/50 border border-green-500/30 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300";
  
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-300 text-sm font-medium mb-2">{label}</label>
      {isTextarea ? (
        <textarea id={id} className={`${commonClasses} min-h-[120px] resize-none`} {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}></textarea>
      ) : (
        <input id={id} className={commonClasses} {...props as React.InputHTMLAttributes<HTMLInputElement>} />
      )}
    </div>
  );
};

export default InputField;
