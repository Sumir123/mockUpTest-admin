import type { NextPage } from "next";
import Head from "next/head";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

const QuestionsList: NextPage = () => {
  return (
    <>
      <Head>
        <title>Question Lists</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="questions_container">
        <div className="header">
          <h3>All Questions </h3>
          <form>
            <div className="dropdown_select">
              <select id="catgry_select">
                <option value=""> Select Category...</option>
                <option value=""> BCA</option>
                <option value=""> Bsc.CSIT</option>
              </select>
              <AiOutlineCaretDown className="select_downArrow" />
            </div>
            <input type="reset" value="Clear" />
          </form>
        </div>
        <div className="question_lists">
          <div className="question_list">
            <div className="question">
              <h3 className="qsn">1. Who is father of Computer science ?</h3>
              <button>
                <MdModeEditOutline className="edit_icon" />
              </button>
            </div>
            <div className="ans">
              <div className="chips">
                <div className="chip">Tim Berners Lee</div>
                <div className="chip"> Charles babbage </div>
                <div className="chip"> Bill Gates </div>
                <div className="chip"> Batman</div>
              </div>
            </div>
            <div className="correct_ans">
              Correct Answer: <div className="chip"> Charles babbage </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionsList;