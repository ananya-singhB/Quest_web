import React, { useReducer, useState, useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { NavBtnLink } from "../NavbarElements";
import "./qna.css";
import Modals from "./Modal";
import { reducer } from "./reducer";
import { FaSearch } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import Auth from "../Auth";
import Modal from "react-modal";
import { FaArrowUp } from "react-icons/fa";

import { ExpandMore, Link, SpaceBar } from "@material-ui/icons";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import { Avatar, Button, colors, Input } from "@material-ui/core";

const defaultState = {
  queries: [],
  answers: [],
  isModalOpen: false,
  modalContent: "",
};

const QnA = () => {
  const [askedQ, setaskedQ] = useState("");
  const [ansQ, setansQ] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [ansModel, setAnsModel] = useState(false);
  const [QId, setQId] = useState(null);
  const [passQ, setPassQ] = useState("");
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [upVote, setUpVote] = useState(false);
  const [count, setCount] = useState(0);

  const handleQuesSubmit = (e) => {
    e.preventDefault();
    if (askedQ) {
      const newQues = { id: new Date().getTime().toString(), askedQ };
      dispatch({ type: "ADD_QUES", payload: newQues });
      setaskedQ("");
    } else {
      dispatch({ type: "NO_QUES" });
    }

    setIsModalOpen(false);
  };

  function handleUpvoteClicked() {
    const downvoteDisabled = upVote;

    if (downvoteDisabled) {
      setUpVote(false);
      setCount(count - 1);
    } else {
      setUpVote(true);
      setCount(count + 1);
    }
    console.log(upVote);
    console.log(count)
  }

  

  const handleAnsSubmit = (e) => {
    e.preventDefault();
    if (ansQ) {
      const newAns = { id: new Date().getTime().toString(), ansQ };
      dispatch({ type: "ADD_ANS", payload: newAns });
      setansQ("");
      setAnsModel(false);
    } else {
      dispatch({ type: "NO_ANS" });
      setAnsModel(false);
    }
  };

  function QA(e) {
    return e.value;
  }

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="contents">
      <div id="stick">
        <FaSearch />
        <input type="text" placeholder="Search" id="search" />
        <Button onClick={() => setIsModalOpen(true)} id="Qbutton">
          Add Question
        </Button>
      </div>
      <Modal
        isOpen={IsmodalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          color: "#00FFFF",
          backgroundColor: "#000000",
          overlay: {
            width: 700,
            height: 600,
            backgroundColor: "#5F9EA0",
            zIndex: "1000",
            top: "50%",
            left: "50%",
            marginTop: "-300px",
            marginLeft: "-350px",
          },
        }}
      >
        <div id="QB">
          <h3>Add Question</h3>
        </div>
        <div className="modal__info">
          <div className="modal__scope">
            <p>
              <FaUserFriends /> Public
            </p>
          </div>
        </div>
        <div className="modal__Field">
          {state.isModalOpen && (
            <Modals closeModal={closeModal} modalContent={state.modalContent} />
          )}

          <form onSubmit={handleQuesSubmit} className="form">
            <div>
              <textarea
                rows="5"
                type="text"
                placeholder="Type your Question..."
                value={askedQ}
                onChange={(e) => setaskedQ(e.target.value)}
              />

              <div>
                <button type="submit">Ask your Query</button>
                <button
                  className="cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>

      {state.queries.map((ques) => {
        return (
          <div key={PermissionStatus.id} className="ans">
            <h3>{ques.askedQ}</h3>
            {/* <h2>{ques.id}</h2> */}
            {ques.id && (
              <div>
                <button
                  type="submit"
                  id="ans"
                  onClick={() => {
                    setAnsModel(true);
                    setQId(ques.id);
                    setPassQ(ques.askedQ);
                  }}
                >
                  Answer
                </button>
              </div>
            )}
          </div>
        );
      })}

      {ansModel && (
        <form onSubmit={handleAnsSubmit}>
          <textarea
            rows="3"
            type="text"
            placeholder="Type your Answer..."
            value={ansQ}
            onChange={(e) => setansQ(e.target.value)}
          />
          <button type="submit">Add Answer</button>
        </form>
      )}

      {state.answers.map((ans) => {
        return (
          <div key={PermissionStatus.id} className="ans">
            {/* <p>{QId}</p> */}
            <table>
              <tr>
                <th>{state.queries.map((ques) => ques.QId)}</th>
                {/* <th>{passQ}</th> */}
                </tr>
              <tr>
                <td>
                  {ans.ansQ}
                  <br />
                  <div style={{ textAlign: "right" }}>
                    {count}
                    <FaArrowUp
                      label="UpVote"
                      onClick={handleUpvoteClicked}
                    />
                  </div>
                  
                </td>
                {/* <td>{ans.id}</td> */}
              </tr>

              {ans.id && (
                <button
                  id="rm"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ANS", payload: ans.id })
                  }
                >
                  Remove
                </button>
              )}
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default QnA;
