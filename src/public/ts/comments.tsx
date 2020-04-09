import React from "react";
import ReactDOM from "react-dom";

interface IComment {
  id: number;
  message: string;
}

const App: React.FunctionComponent = () => {
  const [comments, setComments] = React.useState<IComment[]>([]);

  React.useEffect(() => {
    fetch("/api/v1/comments")
      .then(res => res.json())
      .then(setComments);
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setComments(comments.concat([{ id: comments.length, message: e.target.message.value }]));

    return false;
  }

  return (
    <AppView comments={comments} onSubmit={onSubmit} />
  );
};

interface IProps {
  comments: IComment[];
  onSubmit(e: any): void;
}

const AppView: React.FunctionComponent<IProps> = ({ comments, onSubmit }) => {
  return (
    <div>
      <ul className="products__comments">
        {comments.map(comment => <li key={comment.id} className="products__comment">{comment.message}</li>)}
      </ul>
      <form onSubmit={onSubmit}>
        <input name="message" className="comments__input" placeholder="Comment" />
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("comments"));
