import { Link } from 'react-router-dom';
import Logo from '../assets/header/logo_syz@2x.png';
export default function Header() {
  return (
    <header className="header flex justify-center items-center h-[80px] px-[120px] fixed top-0 left-0 right-0">
      <div className="absolute left-[120px]">
        <a className="brand" href="https://gsap.com" target="_blank" rel="noreferrer">
          <img className="w-[58px] h-[24px]" src={Logo} width="100" />
        </a>
      </div>
      <nav>
        <ul className="flex justify-center items-center space-x-[60px] text-[16px] text-[#303133] font-medium">
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/scroll">技术服务</Link>
          </li>
          <li>
            <Link to="/layers">客户案例</Link>
          </li>
          <li>
            <Link to="/layers">关于我们</Link>
          </li>
        </ul>
      </nav>
      <div className="absolute right-[120px] btn-container flex justify-center items-center text-[14px]">
        <div className="flex justify-center items-center px-[12px] h-[36px] bg-[#F2F4F7] rounded-[10px]">
          中
        </div>
        <div className="ml-[12px] flex justify-center items-center px-[24px] h-[36px] bg-[#303133] rounded-[10px] text-[#ffffff]">
          联系我们
        </div>
      </div>
    </header>
  );
}
