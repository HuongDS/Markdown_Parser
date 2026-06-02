import React, { useState } from 'react';

interface LeftPanelProps {
  onParse: (content: string) => void;
  isLoading: boolean;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({ onParse, isLoading }) => {
  const [content, setContent] = useState('');

  return (
    <section className="w-full lg:w-[40%] p-gutter border-r border-slate-200 flex flex-col gap-6 bg-white">
      <div className="flex flex-col gap-1">
        <h1 className="font-headline-sm text-headline-sm text-slate-900">Project Map Parser</h1>
        <p className="text-on-surface-variant font-body-md text-body-md">
          Dán nội dung file PROJECT_MAP.md vào đây để tự động tạo Data Transfer Objects.
        </p>
      </div>
      
      <div className="flex-grow flex flex-col gap-2">
        <label className="font-label-caps text-label-caps text-slate-500 uppercase">PROMPT BOX</label>
        <textarea 
          className="flex-grow w-full h-full min-h-[300px] bg-slate-50 border border-slate-200 p-4 rounded-2xl font-body-md text-body-md text-slate-900 placeholder:text-slate-400 custom-scrollbar focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none transition-all" 
          placeholder="Nhập nội dung markdown tại đây..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      
      <button 
        className="w-full py-4 rounded-xl font-headline-sm text-headline-sm text-on-primary bg-primary hover:bg-primary-container transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50"
        onClick={() => onParse(content)}
        disabled={isLoading || !content.trim()}
      >
        {isLoading ? 'Đang phân tích...' : 'Gửi yêu cầu & Phân tích'}
      </button>
    </section>
  );
};
