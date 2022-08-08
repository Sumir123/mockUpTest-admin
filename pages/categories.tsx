import type { NextPage } from "next";
import Head from "next/head";
import { AiOutlineClose } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

const Categories: NextPage = () => {
  const openModel = () => {
    var model = document.querySelector(".model");
    var overlay = document.querySelector(".overlay");
    if (model !== null && overlay !== null) {
      overlay.classList.add("active");
      model.classList.add("active");
    }
  };
  const closeModel = () => {
    var model = document.querySelector(".model");
    var overlay = document.querySelector(".overlay");
    if (model !== null && overlay !== null) {
      overlay.classList.remove("active");
      model.classList.remove("active");
    }
  };
  return (
    <>
      <Head>
        <title>Categories </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="category_container">
        <div className="header">
          <h2>Categories</h2>
          <button onClick={openModel}>Add Category</button>
        </div>
        <div className="category_body">
          {/* show illustration when no category */}
          {/* <div className="illustration">
            <img src="NoData.jpg" alt="illustration-NoData" />
            <p>No Data</p>
          </div> */}
          <div className="category_card">
            <div className="card" onClick={openModel}>
              <h2>BCA</h2>
              <p>Test question for BCA admission</p>
              <MdModeEditOutline className="card_edit" />
            </div>
            <div className="card" onClick={openModel}>
              <h2>BCA</h2>
              <p>Test question for BCA admission</p>
              <MdModeEditOutline className="card_edit" />
            </div>
            <div className="card" onClick={openModel}>
              <h2>BCA</h2>
              <p>Test question for BCA admission</p>
              <MdModeEditOutline className="card_edit" />
            </div>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
      <div className="model">
        <div className="model_heading">
          <h3>Add new Category</h3>
          <button onClick={closeModel}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="model_body">
          <form>
            <div className="form_item">
              <label htmlFor="CategoryTitle">
                Category Title <span className="required">*</span> :
              </label>
              <input id="CategoryTitle" type="text" />
            </div>
            <div className="form_item">
              <label htmlFor="description">Description :</label>
              <textarea />
            </div>
          </form>
        </div>
        <div className="model_footer">
          <button className="secondary" onClick={closeModel}>
            Cancel
          </button>
          <button className="primary">Add</button>
        </div>
      </div>
    </>
  );
};

export default Categories;
