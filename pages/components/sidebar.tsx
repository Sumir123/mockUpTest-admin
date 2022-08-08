import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { RiAddCircleLine } from "react-icons/ri";
import { VscListSelection } from "react-icons/vsc";

const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className="sidebar">
        <ul>
          <li className={router.pathname == "/" ? "active" : ""}>
            <AiOutlineDashboard />
            <Link href="/">Dashboard</Link>
          </li>
          <li className={router.pathname == "/categories" ? "active" : ""}>
            <BiCategoryAlt />
            <Link href="/categories">Categories</Link>
          </li>
          <li className={router.pathname == "/addQuestions" ? "active" : ""}>
            <RiAddCircleLine />
            <Link href="/addQuestions">Add Questions</Link>
          </li>
          <li className={router.pathname == "/questionList" ? "active" : ""}>
            <VscListSelection />
            <Link href="/questionList">Questions Lists</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
