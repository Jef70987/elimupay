import React from "react";
import './style/Receipt.css'

const Receipt = () => {
  

  return (
    <div className="modal show">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Digital Receipt</h3>
        </div>
        <div className="modal-body">
          <div className="receipt">
            <div className="receipt-header">
              <div className="receipt-title">ELIMUPAY</div>
              <div>School Fee Payment Receipt</div>
               {/* style={{ fontSize: '14px', color: 'var(--gray)', marginTop: '5px' }} */}
              <div>
                Bidii Primary School
              </div>
            </div>
            
            <div className="receipt-amount">Ksh.4500</div>
            
            <div className="receipt-details">
              <div>
                <div className="receipt-row">
                  <span className="receipt-label">Receipt No:</span>
                  <span className="receipt-value">R10100</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Date & Time:</span>
                  <span className="receipt-value">2025/11/10</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Payment Method:</span>
                  <span className="receipt-value">Mpesa</span>
                </div>
              </div>
              <div>
                <div className="receipt-row">
                  <span className="receipt-label">Student Name:</span>
                  <span className="receipt-value">Mary Wanjiku</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Admission No:</span>
                  <span className="receipt-value">Moi/2021/089</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Class:</span>
                  <span className="receipt-value">
                    grade-3
                  </span>
                </div>
              </div>
            </div>
            
            <div className="receipt-footer">
              <div>Thank you for your payment!</div>
              <div>This is a computer-generated receipt. No signature required.</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
            <button className="btn" style={{ flex: 1 }} >
              Print Receipt
            </button>
            <button className="btn" style={{ flex: 1 }}>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;