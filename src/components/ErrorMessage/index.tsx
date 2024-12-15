interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className="alert alert-danger my-4">{message}</div>;
}

export default ErrorMessage;
