import { memo, useState } from "react"
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineTwitter, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [isShowCategories, setIsShowCategories] = useState(true);
    const [menus] = useState([
        {
            name: "TRANG CHỦ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "SHOP",
            path: "TấT CA"
        },

        {
            name: "SẢN PHẨM",
            path: "PRODUCT",
            isShowSubMenu: false,
            child: [
                {
                    name: "SÁCH kinh tế",
                    path: "Sách kinh tế",
            
                },
                {
                    name: "Văn học trong nước",
                    path: "Văn học trong nước",
                },
                {
                    name: "Văn học nước ngoài",
                    path: "Văn học nước ngoài",
                },
                {
                    name: "SÁCH Thiếu Nhi",
                    path: "SÁCH Thiếu Nhi",
                },
                {
                    name: "Tiểu sử_hồi kí",
                    path: "Tiểu sử_hồi kí",
                },
                {
                    name: "Sách học ngoại ngữ",
                    path: "Sách học ngoại ngữ",
                }
            ]
        },
        {
            name: "MY BOOK",
            path: ""
        },

        {
            name: "Liên hệ",
            path: ""
        }
        
    ]);

    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail /> 
                                </li>
                                <li>
                                   
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Đăng Nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>OLD SHOP BOOK </h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>
                                                {menu?.name}
                                            </Link>
                                            {
                                                menu.child && (
                                                    <ul className="header_menu_dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path}>
                                                                        {childItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formatter(1001230)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to='#'>
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="container">
                <div className="row hero_categories_container">
                    <div className="col-lg-3 hero_categories">
                        <div className="hero_categories_all" onClick={() => setIsShowCategories(!isShowCategories)}>
                            <AiOutlineMenu />
                              Top Tìm Kiếm 
                        </div>
                            <ul className={isShowCategories ? "" : "hidden"}>
                                <li>
                                    <Link to="freshmeat">
                                        Thần Số Học Ứng Dụng
                                    </Link>
                                </li>    
                                <li>
                                    <Link to="#">
                                        Hạnh Phúc Cầm Tay
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Nhà Giả Kim
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Lén Nhặt Chuyện Đời
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Tâm Lý Học Tội Phạm
                                    </Link>
                                </li>                     
                            </ul>
                        </div>
                    <div className="col-lg-9 hero_search_container">
                        <div className="hero_seach">
                            <div className="hero_search_form">
                                <form>
                                    <input type="" name="" value="" placeholder="What are you seaching?"/>
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                            <div className="hero_search_phone">
                                <div className="hero_search_phone_icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="hero_search_phone_text">
                                    <p>LIÊN HỆ TƯ VẤN </p>
                                    <span>TRỰC TUYẾN 24/7</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);