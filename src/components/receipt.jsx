
import './style/Receipt.css';
import { useNavigate } from "react-router-dom";

const Receipt = () => {
  const navigate = useNavigate();
    // Mock data - replace with actual API call
  const mockReceiptData = [
    {
      id: 1,
      receiptNumber: 'ELM20241120001',
      school: 'Moi Primary School',
      student: 'Mary Wanjiku - Grade 3',
      amount: 'KES 4,500',
      date: '2024-11-20 11:45 AM',
      transactionId: 'NL41H8920XS',
      status: 'success',
      paybill: '123456',
      admissionNo: 'MOI/2021/089',
      paymentMethod: 'M-PESA'
    },
    
  ];

  const mockReceipts = mockReceiptData[0];

  //  useEffect(() => {
  //   // Simulate API call
  //   setTimeout(() => {
  //     setSelectedReceipt(mockReceipts);
      
  //   }, 1000);
  // }, []);
  
  const handleDownloadReceipt = () => {
    alert('Receipt downloaded as PDF!');
  };

  const handleShareReceipt = () => {
    alert('Receipt shared successfully!');
  };

  const handleCloseModal = () => {
    navigate('/Dashboard');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="payment--receipt-modal">
          <div className="payment--receipt-modal-content">
            <div className="payment--receipt-modal-header">
              <button className="payment--close-btn" onClick={handleCloseModal}>
                ×
              </button>
              <div className="payment--receipt-modal-title">Payment Receipt</div>
              <div className="payment--receipt-modal-subtitle">Transaction Details</div>
            </div>

            <div className="payment--receipt-modal-body">
              <div className="payment--detail-receipt">
                <div className="payment--detail-receipt-header">
                  <div className="payment--detail-receipt-title">ELIMUPAY</div>
                  <div>School Fee Payment Receipt</div>
                </div>

                <div className="payment--detail-receipt-amount">
                  {mockReceipts.amount}
                </div>

                <div className="payment--detail-receipt-grid">
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">Receipt Number:</span>
                    <span className="payment--detail-receipt-value">{mockReceipts.receiptNumber}</span>
                  </div>
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">Date & Time:</span>
                    <span className="payment--detail-receipt-value">{formatDate(mockReceipts.date)}</span>
                  </div>
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">Transaction ID:</span>
                    <span className="payment--detail-receipt-value">{mockReceipts.transactionId}</span>
                  </div>
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">School:</span>
                    <span className="payment--detail-receipt-value">{mockReceipts.school}</span>
                  </div>
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">PayBill:</span>
                    <span className="payment--detail-receipt-value">{mockReceipts.paybill}</span>
                  </div>
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">Student:</span>
                    <span className="payment--detail-receipt-value">{mockReceipts.student}</span>
                  </div>
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">Admission No:</span>
                    <span className="payment--detail-receipt-value">{mockReceipts.admissionNo}</span>
                  </div>
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">Payment Method:</span>
                    <span className="payment--detail-receipt-value">{mockReceipts.paymentMethod}</span>
                  </div>
                  <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">Status:</span>
                    <span className="payment--detail-receipt-value">
                      <span className={`receipt-status status-${mockReceipts.status}`}>
                        {mockReceipts.status}
                      </span>
                    </span>
                  </div>
                  {/* <div className="payment--detail-receipt-row">
                    <span className="payment--detail-receipt-label">M-PESA Balance:</span>
                    <span className="payment--detail-receipt-value">{mockReceipts.mpesaBalance}</span>
                  </div> */}
                </div>

                <div style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  paddingTop: '15px',
                  borderTop: '1px solid #e9ecef',
                  color: '#666',
                  fontSize: '12px'
                }}>
                  This is an computer-generated receipt. No signature required.
                </div>
              </div>

              <div className="payment--receipt-actions">
                <button className="payment--receipt-action-btn payment--btn-secondary" onClick={handleShareReceipt}>
                  📧 Share
                </button>
                <button className="payment--receipt-action-btn payment--btn-primary" onClick={handleDownloadReceipt}>
                  📥 Download
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Receipt;