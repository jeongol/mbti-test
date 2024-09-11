import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ user, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handletsetItem = () => {
    navigate("/testresiltitem");
  };

  const handletestList = () => {};
  navigate("/tsetresultpage");
  return (
    <div>
      <header className="py-4 px-3">
        <nav className="flex justify-between">
          <Link to="/">홈</Link>
          <div className="space-x-4">
            {user ? (
              <>
                <button onClick={handleProfile}>프로필</button>
                <button onClick={handletsetItem}>테스트</button>
                <button onClick={handletestList}>결과 보기</button>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
