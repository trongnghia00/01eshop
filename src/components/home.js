import React from "react";
import '../css/home.css';
import Product from "./product";

const Home = () => {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://media.amway.com.au/sys-master/images/h9b/h61/9086105387038/122339-Art_POLISHING-MASK-Apr-21_01.png" alt="" />
            <div className="home_row">
                <Product
                    id="1"
                    title="TP BVSK Nutrilite Probiotic"
                    price={1010000}
                    rating={5}
                    image="https://media.amway.com.vn/sys-master/images/hec/hc5/9028465164318/nu_120571_1_Probiotic_Product_588Wx588H"
                />
                <Product
                    id="2"
                    title="TP BVSK Nutrilite Bio C plus"
                    price={451000}
                    rating={5}
                    image="https://media.amway.com.vn/sys-master/images/h76/h5b/9028210327582/nu_104270_1_Bio_C_Product_588Wx588H"
                />
            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="Sữa rửa mặt dạng gel Artistry Skin Nutrition Balancing Jelly Cleanser"
                    price={595000}
                    rating={5}
                    image="https://media.amway.com.vn/sys-master/images/h37/h1c/9373755146270/art_123792_1_Sua_Rua_Mat_Dang_Gel_Artistry_Skin_Nutrition%20_amway-WF_Product_588Wx588H"
                />
                <Product
                    id="4"
                    title="Nước cân bằng Artistry Skin Nutrition Renewing Softening Toner"
                    price={880000}
                    rating={4}
                    image="https://media.amway.com.vn/sys-master/images/h39/h7f/9267687850014/123783VN_amway-WF_Product_588Wx588H"
                />
                <Product
                    id="5"
                    title="Mặt nạ làm sạch sâu Artistry Signature Select Purifying Mask"
                    price={787000}
                    rating={4}
                    image="https://media.amway.com.vn/sys-master/images/h55/hce/9031720665118/art_122342_1_Mat_Na_Lam_Sach_%20Select_Hydrating_Mask_Product_588Wx588H"
                />
            </div>
            <div className="home_row">
                <Product
                    id="6"
                    title="Nước xịt thơm miệng Glister"
                    price={153000}
                    rating={5}
                    image="https://media.amway.com.vn/sys-master/images/hfa/hf6/9031204077598/per_E9893_1_Nuoc_xit_Glister_Product_588Wx588H"
                />
            </div>
        </div>
    </div>
  );
}

export default Home;
