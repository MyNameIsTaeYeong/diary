function LoginForm({ googleLogin, tempLogin, tempJoin }) {
  return (
    <div>
      <button onClick={googleLogin}>구글로그인</button>
      <div>네이버로그인</div>
      <div>카카오로그인</div>
      <div>
        <button onClick={tempLogin}>임시로그인</button>
      </div>
      <div>
        <button onClick={tempJoin}>임시회원생성</button>
      </div>
    </div>
  );
}

export default LoginForm;
