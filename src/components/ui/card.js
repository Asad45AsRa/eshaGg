export const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>{children}</div>
  );
  
  export const CardHeader = ({ children, className }) => (
    <div className={`border-b p-4 ${className}`}>{children}</div>
  );
  
  export const CardTitle = ({ children, className }) => (
    <h3 className={`font-bold text-lg ${className}`}>{children}</h3>
  );
  
  export const CardContent = ({ children, className }) => (
    <div className={`p-4 ${className}`}>{children}</div>
  );