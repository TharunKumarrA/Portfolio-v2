"use client";

const ResumeViewer = () => {
  const pdfUrl = "/resume.pdf";

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#191919] p-5">
      <div className="w-full lg:w-11/12 lg:w-4/5 h-full shadow-lg rounded-xl overflow-hidden bg-background p-2 mb-5">
        {/* Embed the PDF using iframe */}
        <iframe
          src={pdfUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeViewer;
