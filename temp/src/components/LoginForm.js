function LoginForm({ googleLogin }) {
  return (
    <div>
      <button onClick={googleLogin}>구글로그인</button>
      <div>네이버로그인</div>
      <div>카카오로그인</div>
    </div>
  );
}

export default LoginForm;
