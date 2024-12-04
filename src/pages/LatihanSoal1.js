import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal1 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa fungsi utama dari membran sel dalam suatu sel?",
      options: [
        { label: "A. Mengatur keluar masuknya zat", value: "A", isCorrect: true },
        { label: "B. Menyimpan materi genetik", value: "B" },
        { label: "C. Menyintesis protein", value: "C" },
        { label: "D. Menghasilkan energi", value: "D" },
      ],
      explanation:
        "Membran sel berfungsi sebagai penghalang yang mengatur pergerakan zat-zat ke dalam dan keluar dari sel.",
    },
    {
      question: "Dimana sel-sel spermatzoa dimatangkan?",
      options: [
        { label: "A. Tubuli seminiferi", value: "A" },
        { label: "B. Ductus deferens", value: "B" },
        { label: "C. Epididymis", value: "C", isCorrect: true },
        { label: "D. Ductus afferens", value: "D" },
      ],
      explanation:
        "Sel-sel spermatzoa diproduksi di dalam tubulus seminiferus testis dan kemudian dipindahkan ke epididymis untuk proses pematangan.",
    },
    {
      question: "Dimana sel-sel spermatzoa dimatangkan?",
      options: [
        { label: "A.Tubuli seminiferi ", value: "A" },
        { label: "B.Ductus deferens", value: "B" },
        { label: "C. Epididymis ", value: "C",isCorrect: true},
        { label: "D.Ductus afferens ", value: "D" },
      ],
      explanation:
        "Sel-sel spermatzoa diproduksi di dalam tubulus seminiferus testis dan kemudian dipindahkan ke epididymis untuk proses pematangan. Di sini, sperma menyelesaikan perkembangan dan menjadi mampu bergerak untuk fertilisasi."
    },
    {
        question: "Proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang sama seperti sel induknya adalah...",
        options: [
          { label: "A.Mitosis ", value: "A", isCorrect: true },
          { label: "B. Meiosis", value: "B" },
          { label: "C.Pembelahan Biner ", value: "C" },
          { label: "D. Fagositosis", value: "D" },
        ],
        explanation:
          "Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang identik dengan sel induknya. Mitosis terdiri dari beberapa tahap yaitu profase, metafase, anafase, dan telofase."
      },
      {
        question: "Jika sel kekurangan fungsi mitokondria, bagaimana hal tersebut mempengaruhi sel dan organisme secara keseluruhan?",
        options: [
          { label: "A. Sel tidak dapat memproduksi energi (ATP) yang cukup, mengganggu fungsi metabolisme sel ", value: "A", isCorrect: true },
          { label: "B.Sel tidak dapat menghasilkan protein dengan efisien", value: "B" },
          { label: "C.. Sel tidak dapat melakukan pembelahan sel ", value: "C" },
          { label: "D. Sel kehilangan kemampuan untuk mengatur keluar masuknya zat ", value: "D" },
        ],
        explanation:
          "Mitokondria berfungsi sebagai 'pembangkit tenaga' sel, memproduksi ATP melalui respirasi sel. Tanpa mitokondria yang berfungsi dengan baik, sel tidak dapat menghasilkan energi yang diperlukan untuk aktivitas metabolisme, yang akhirnya akan mempengaruhi kelangsungan hidup sel dan organisme secara keseluruhan."
      },
      {
        question: "Dalam proses meiosis, terjadi pengurangan jumlah kromosom menjadi setengahnya. Apa tujuan utama dari proses ini dalam reproduksi seksual?",
        options: [
          { label: "A.Untuk menghasilkan sel-sel dengan jumlah kromosom yang sama dengan sel induk ", value: "A" },
          { label: "B. Untuk memastikan variasi genetik pada keturunan", value: "B", isCorrect: true },
          { label: "C. Untuk mempercepat pembentukan sel-sel germinal ", value: "C" },
          { label: "D.Untuk memperbaiki kerusakan DNA dalam sel germinal ", value: "D" },
        ],
        explanation:
          "Meiosis menghasilkan sel-sel germinal (sel telur dan sperma) dengan jumlah kromosom setengah dari sel induknya, yang memungkinkan terjadinya rekombinasi genetik dan memastikan variasi genetik pada keturunan. Proses ini penting untuk mempertahankan keanekaragaman genetik dalam populasi."
      },
    ]; 

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option.value;
    setAnswers(updatedAnswers);

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsCorrect(option.isCorrect || false);
    setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(answers[currentQuestionIndex + 1] ? true : false);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] ? true : false);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const handleRestartQuiz = () => {
    setAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
          <button className="finish-button" onClick={handleRestartQuiz}>
            Ulangi Latihan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Mode Bionik</h1>
        <div className="latihan-soal1-question">
          <p>{currentQuestion.question}</p>
        </div>
        <div className="latihan-soal1-answers">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`latihan-soal1-answer-button ${
                answers[currentQuestionIndex] === option.value
                  ? "latihan-soal1-selected-answer"
                  : ""
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex]}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] && (
          <div className="latihan-soal1-explanation-box">
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
          <button
            className="nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Soal Sebelumnya
          </button>
          <button
            className="nav-button next"
            onClick={
              currentQuestionIndex === questions.length - 1
                ? handleFinishQuiz
                : goToNextQuestion
            }
          >
            {currentQuestionIndex === questions.length - 1
              ? "Selesai"
              : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal1;






