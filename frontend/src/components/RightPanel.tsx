import React from 'react';

export interface EntryPoint {
  Class: string;
  Method: string;
}

export interface BusinessFeature {
  Name: string;
  Description: string;
  HttpEndpoint: string;
  EntryPoint: EntryPoint;
}

export interface TechStack {
  Framework: string;
  ThirdPartyLibraries: string[];
}

export interface ProjectMapData {
  TechStack: TechStack;
  Features: BusinessFeature[];
}

interface RightPanelProps {
  data: ProjectMapData | null;
}

export const RightPanel: React.FC<RightPanelProps> = ({ data }) => {
  if (!data) {
    return (
      <section className="w-full lg:w-[60%] p-gutter bg-slate-50/50 flex flex-col items-center justify-center gap-section-margin h-[calc(100vh-72px)]">
        <div className="flex flex-col items-center gap-4 opacity-50">
          <span className="material-symbols-outlined text-6xl text-slate-400">upload_file</span>
          <p className="text-slate-500 font-body-md text-center">Hãy nhập nội dung Markdown và nhấn Parse để xem kết quả</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full lg:w-[60%] p-gutter bg-slate-50/50 flex flex-col gap-section-margin overflow-y-auto custom-scrollbar h-[calc(100vh-72px)]">
      
      {/* Tech Stack Section */}
      <div className="fade-in-up stagger-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary">layers</span>
          <h2 className="font-headline-sm text-headline-sm text-slate-900">Cấu hình Công nghệ (Tech Stack)</h2>
        </div>
        
        <div className="glass-card p-6 rounded-2xl flex flex-wrap items-center gap-gutter">
          <div className="flex flex-col gap-2">
            <span className="font-label-caps text-label-caps text-slate-500">FRAMEWORK</span>
            <div className="px-6 py-3 rounded-xl bg-primary/5 border border-primary/20 text-primary font-headline-sm text-headline-sm">
                [{data.TechStack?.Framework || 'N/A'}]
            </div>
          </div>
          
          <div className="flex flex-col gap-2 flex-grow">
            <span className="font-label-caps text-label-caps text-slate-500">LIBRARIES</span>
            <div className="flex flex-wrap gap-2">
              {data.TechStack?.ThirdPartyLibraries?.map((lib, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-body-md text-body-md hover:bg-slate-200 transition-colors cursor-default">
                  {lib}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Features Section */}
      <div className="fade-in-up stagger-2">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">dashboard_customize</span>
            <h2 className="font-headline-sm text-headline-sm text-slate-900">Chức năng Nghiệp vụ (Business Features)</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-card-gap">
          {data.Features?.map((feature, idx) => {
            // parse endpoint if possible
            const methodMatch = feature.HttpEndpoint?.match(/^(GET|POST|PUT|DELETE|PATCH)\s+(.*)/i);
            const method = methodMatch ? methodMatch[1].toUpperCase() : 'REQ';
            const path = methodMatch ? methodMatch[2] : feature.HttpEndpoint;

            return (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-sm text-headline-sm text-slate-900 group-hover:text-primary transition-colors">{feature.Name}</h3>
                </div>
                <p className="text-on-surface-variant font-body-md text-body-md flex-grow">
                  {feature.Description}
                </p>
                <div className="mt-2 space-y-3">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label-caps text-label-caps text-slate-500">ENDPOINT</span>
                    <div className="flex items-center rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <span className={`px-2 py-1 text-white font-bold text-[10px] ${method === 'POST' ? 'bg-success-green' : method === 'GET' ? 'bg-primary' : 'bg-secondary'}`}>
                        {method}
                      </span>
                      <code className="px-3 py-1 font-code-sm text-code-sm text-slate-600 truncate">{path}</code>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label-caps text-label-caps text-slate-500">ENTRY POINT</span>
                    <div className="flex items-center gap-2 text-slate-500">
                      <span className="material-symbols-outlined text-sm">terminal</span>
                      <code className="font-code-sm text-code-sm text-primary">{feature.EntryPoint?.Class}.{feature.EntryPoint?.Method}()</code>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
