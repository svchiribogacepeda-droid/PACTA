interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-bg-alt border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
          PACTA
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
