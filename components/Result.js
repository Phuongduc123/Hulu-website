import { useRouter } from "next/dist/client/router";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move"

const Result = ({results}) => {
  const router = useRouter()

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4">
      {
        results.map((result, key)=> {
          return <Thumbnail key={result.id} result={result}/>
        })
      }
    </div>
  );
};

export default Result;
