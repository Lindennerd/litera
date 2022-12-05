import { useMemo, useState } from "react";
import { BsTwitter } from "react-icons/bs";

interface Props {
    onSendTweet: (tweet: string) => void
}

const Form = ({onSendTweet} : Props) => {
  const [tweet, setTweet] = useState<string>("");
  const threadSize = useMemo(() => {
    return Math.ceil(tweet.length / 278);
  }, [tweet]);
    
    const handleSendTweet = (e: any) => {
        e.preventDefault();
        onSendTweet(tweet);
    }

  return (
    <form className="flex flex-col gap-4" onSubmit={e => handleSendTweet}>
      <p className="text-2xl font-semibold text-white ">Your Tweet</p>
      {threadSize > 0 && (
        <p className="text-white">
          This text will generate a thread with {threadSize}{" "}
          {threadSize <= 1 ? "tweet" : "tweets"}
        </p>
      )}
      <textarea
        rows={20}
        cols={40}
        placeholder="Type in here that looooooong text that you want to share on Twitter, but can't because of characters limit"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        className="rounded-md p-2 outline-none 
                transition-shadow ease-in focus:border-blue-500
                focus:shadow-xl focus:shadow-blue-500"
      />
      <button
        className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-blue-700 
            p-2 font-semibold text-white transition-colors hover:bg-blue-800"
      >
        Send Tweet
        <BsTwitter className="text-lg" />
      </button>
    </form>
  );
};

export default Form;
