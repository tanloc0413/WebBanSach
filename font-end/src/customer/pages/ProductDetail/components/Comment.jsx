import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useMatch } from "react-router-dom";
import commentApi from "../../../../api/commentApi";
import { useSelector } from "react-redux";
import { userid } from "../../../../app/Selectors";
import useComments from "../../../../hooks/useComments";
Coment.propTypes = {
  onSubmit: PropTypes.func,
  commentsData: PropTypes.array,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Comment = ({ comment, handleReplyComment }) => (
  <Paper elevation={1} style={{ padding: "16px", marginBottom: "8px" }}>
    <Typography variant="body1">
      <strong>{comment.author}</strong>
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {comment.date}
    </Typography>
    <Typography variant="body1" style={{ marginTop: "8px" }}>
      {comment.content}
    </Typography>
    <Button
      style={{ marginTop: "8px" }}
      onClick={() => handleReplyComment(comment.author,comment.id)}
    >
      Trả lời
    </Button>
    {comment.replies && comment.replies.length > 0 && (
      <Box marginTop={2}>
        {comment.replies.map((reply, index) => (
          <Comment
            key={index}
            comment={reply}
            handleReplyComment={handleReplyComment}
          />
        ))}
      </Box>
    )}
  </Paper>
);
function Coment({ data }) {
  const match = useMatch("/products/:productId");
  const [open, setOpen] = useState(false);
  const [author, setAuthor] = useState();
  const [question, setQuestion] = useState("");
  const [question1, setQuestion1] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const userId = useSelector(userid);
  const [commentsData, setCommentsData] = useState(data);
  const [parentId, setParentId] = useState();
  const {
    params: { productId },
  } = match;

  const handleClose = () => setOpen(false);
  const handleReplyComment = async (author,id) => {
    setOpen(true);
    setAuthor(author);
    setParentId(id);
  };
  const handleInputChange = (event) => {
    setQuestion(event.target.value);
    if (event.target.value) {
      setError(""); // Xóa thông báo lỗi nếu người dùng nhập gì đó
    }
  };
  const handleInputChange1 = (event) => {
    setQuestion1(event.target.value);
    if (event.target.value) {
      setError1(""); // Xóa thông báo lỗi nếu người dùng nhập gì đó
    }
  };
  // console.log("data: ", data);
  // setCommentsData(data);
  // console.log("commentsData: ", commentsData);

  const handleSubmitComment = async () => {
    console.log("coment");
    if (!question.trim()) {
      setError("Câu hỏi không được để trống");
      return;
    }
    if (userId == null) {
      setError("Yêu cầu đăng nhập");
      return;
    }
    const commentData = {
      content: question,
      productId: productId,
      parentCommentId: "",
      userId: userId,
      author: "Nguyen Van C",
    };
    try {
      const res = await commentApi.createComment(commentData);
      if (res.status === "success") {
        try {
          const res = await commentApi.getComments(productId);
          setCommentsData(res);setQuestion("");
          console.log("Loi lay ds comments", res);
        } catch (error) {
          console.log("Loi lay ds comments", error);
        }
      } else {
        alert("Comment thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi đăng ký: ", error);
      alert("Đã xảy ra lỗi trong quá trình đăng ký");
    }
  };
  const handleSubmitReplyComment = async () => {
    console.log("coment");
    if (!question1.trim()) {
      setError1("Câu hỏi không được để trống");
      return;
    }
    if (userId == null) {
      setError1("Yêu cầu đăng nhập");
      return;
    }
    const replyCommentData = {
      content: question1,
      productId: productId,
      parentCommentId: "",
      userId: userId,
      author: "Nguyen Van C",
    };
    console.log("parentId", parentId);
    try {
      const res = await commentApi.replyComment(parentId,replyCommentData);
      if (res.status === "success") {
        try {
          const res = await commentApi.getComments(productId);
          setCommentsData(res);setQuestion1("");
          setOpen(false);
          setQuestion1("");
          console.log("Loi lay ds comments", res);
        } catch (error) {
          console.log("Loi lay ds comments", error);
        }
      } else {
        alert("Comment thất bại: " + res.message);
      }
    } catch (error) {
      console.log("Lỗi đăng ký: ", error);
      alert("Đã xảy ra lỗi trong quá trình đăng ký");
    }
  };
  return (
    <Box padding="24px 0px">
      <Box>
        {commentsData &&
          commentsData.map((comment, index) => (
            <Comment
              key={index}
              comment={comment}
              handleReplyComment={handleReplyComment}
            />
          ))}
        <Box marginTop={2}>
          <TextField
            label="Viết đánh giá của bạn"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={question}
            onChange={handleInputChange}
            error={!!error}
            helperText={error}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "8px" }}
            onClick={handleSubmitComment}
          >
            Gửi đánh giá
          </Button>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box marginTop={2}>
            <Typography>Trả lời "{author}"</Typography>
            <TextField
              label="Viết câu hỏi của bạn"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={question1}
              onChange={handleInputChange1}
              error={!!error1}
              helperText={error1}
              sx={{marginTop:'5px'}}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "8px" }}
              onClick={handleSubmitReplyComment}
            >
              Gửi câu hỏi
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default Coment;
