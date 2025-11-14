/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Transaction.css';

const Transactions = ({ onBack }) => {
  const [receipts, setReceipts] = useState([]);
  const [filteredReceipts, setFilteredReceipts] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API call
  const mockReceipts = [
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
      mpesaBalance: 'KES 10,730',
      paymentMethod: 'M-PESA'
    },
    {
      id: 2,
      receiptNumber: 'ELM20241119001',
      school: 'Nairobi High School',
      student: 'David Kiprop - Form 2',
      amount: 'KES 8,000',
      date: '2024-11-19 10:30 AM',
      transactionId: 'PL52J9031YT',
      status: 'success',
      paybill: '789012',
      admissionNo: 'NBI/2020/123',
      mpesaBalance: 'KES 18,730',
      paymentMethod: 'M-PESA'
    },
    {
      id: 3,
      receiptNumber: 'ELM20241118001',
      school: 'St. Mary\'s Academy',
      student: 'Grace Akinyi - Grade 1',
      amount: 'KES 3,200',
      date: '2024-11-18 02:15 PM',
      transactionId: 'QM63K0142ZU',
      status: 'success',
      paybill: '345678',
      admissionNo: 'STM/2022/045',
      mpesaBalance: 'KES 21,930',
      paymentMethod: 'M-PESA'
    },
    {
      id: 4,
      receiptNumber: 'ELM20241117001',
      school: 'Moi Primary School',
      student: 'John Kamau - Grade 4',
      amount: 'KES 5,000',
      date: '2024-11-17 09:20 AM',
      transactionId: 'RN74L1253AV',
      status: 'pending',
      paybill: '123456',
      admissionNo: 'MOI/2021/156',
      mpesaBalance: 'KES 26,930',
      paymentMethod: 'M-PESA'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setReceipts(mockReceipts);
      setFilteredReceipts(mockReceipts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterReceipts();
  }, [searchTerm, activeFilter, receipts]);

  const filterReceipts = () => {
    let filtered = receipts;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(receipt =>
        receipt.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
        receipt.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
        receipt.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(receipt => receipt.status === activeFilter);
    }

    setFilteredReceipts(filtered);
  };

  const handleReceiptClick = (receipt) => {
    setSelectedReceipt(receipt);
  };

  const handleCloseModal = () => {
    setSelectedReceipt(null);
  };

//   const handlePrintReceipt = () => {
//     alert('Receipt sent to printer!');
//   };

  const handleDownloadReceipt = () => {
    alert('Receipt downloaded as PDF!');
  };

  const handleShareReceipt = () => {
    alert('Receipt shared successfully!');
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

  if (loading) {
    return (
      <div className="transactions-container">
        <div className="loading">
          <div style={{ fontSize: '32px', marginBottom: '15px' }}>⏳</div>
          <p>Loading your receipts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="transactions-container">
      {/* Header */}
      <div className="transactions-header">
        <button 
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#128C7E',
            fontSize: '18px',
            position: 'absolute',
            left: '20px',
            top: '20px',
            cursor: 'pointer'
          }}
        >
          ← Back
        </button>
        <h1>Payment Receipts</h1>
        <p>View your payment history and receipts</p>
      </div>

      {/* Search and Filter */}
      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search by school, student, or receipt number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Payments
          </button>
          <button
            className={`filter-btn ${activeFilter === 'success' ? 'active' : ''}`}
            onClick={() => setActiveFilter('success')}
          >
            Successful
          </button>
          <button
            className={`filter-btn ${activeFilter === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveFilter('pending')}
          >
            Pending
          </button>
        </div>
      </div>

      {/* Receipts List */}
      <div className="receipts-list">
        {filteredReceipts.length === 0 ? (
          <div className="no-receipts">
            <div className="no-receipts-icon">📄</div>
            <h3>No receipts found</h3>
            <p>No payment receipts match your search criteria</p>
          </div>
        ) : (
          filteredReceipts.map((receipt) => (
            <div
              key={receipt.id}
              className="receipt-card"
              onClick={() => handleReceiptClick(receipt)}
            >
              <div className="receipt-header">
                <div>
                  <div className="receipt-school">{receipt.school}</div>
                  <div className="receipt-student">{receipt.student}</div>
                </div>
                <div className="receipt-amount">{receipt.amount}</div>
              </div>

              <div className="receipt-details">
                <div className="receipt-detail">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{formatDate(receipt.date)}</span>
                </div>
                <div className="receipt-detail">
                  <span className="detail-label">Receipt No</span>
                  <span className="detail-value">{receipt.receiptNumber}</span>
                </div>
                <div className="receipt-detail">
                  <span className="detail-label">Status</span>
                  <span className={`receipt-status status-${receipt.status}`}>
                    {receipt.status}
                  </span>
                </div>
                <div className="receipt-detail">
                  <span className="detail-label">Transaction ID</span>
                  <span className="detail-value">{receipt.transactionId}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Receipt Detail Modal */}
      {selectedReceipt && (
        <div className="receipt-modal">
          <div className="receipt-modal-content">
            <div className="receipt-modal-header">
              <button className="close-btn" onClick={handleCloseModal}>
                ×
              </button>
              <div className="receipt-modal-title">Payment Receipt</div>
              <div className="receipt-modal-subtitle">Transaction Details</div>
            </div>

            <div className="receipt-modal-body">
              <div className="detail-receipt">
                <div className="detail-receipt-header">
                  <div className="detail-receipt-title">ELIMUPAY</div>
                  <div>School Fee Payment Receipt</div>
                </div>

                <div className="detail-receipt-amount">
                  {selectedReceipt.amount}
                </div>

                <div className="detail-receipt-grid">
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">Receipt Number:</span>
                    <span className="detail-receipt-value">{selectedReceipt.receiptNumber}</span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">Date & Time:</span>
                    <span className="detail-receipt-value">{formatDate(selectedReceipt.date)}</span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">Transaction ID:</span>
                    <span className="detail-receipt-value">{selectedReceipt.transactionId}</span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">School:</span>
                    <span className="detail-receipt-value">{selectedReceipt.school}</span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">PayBill:</span>
                    <span className="detail-receipt-value">{selectedReceipt.paybill}</span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">Student:</span>
                    <span className="detail-receipt-value">{selectedReceipt.student}</span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">Admission No:</span>
                    <span className="detail-receipt-value">{selectedReceipt.admissionNo}</span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">Payment Method:</span>
                    <span className="detail-receipt-value">{selectedReceipt.paymentMethod}</span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">Status:</span>
                    <span className="detail-receipt-value">
                      <span className={`receipt-status status-${selectedReceipt.status}`}>
                        {selectedReceipt.status}
                      </span>
                    </span>
                  </div>
                  <div className="detail-receipt-row">
                    <span className="detail-receipt-label">M-PESA Balance:</span>
                    <span className="detail-receipt-value">{selectedReceipt.mpesaBalance}</span>
                  </div>
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

              <div className="receipt-actions">
                <button className="receipt-action-btn btn-secondary" onClick={handleShareReceipt}>
                  📧 Share
                </button>
                <button className="receipt-action-btn btn-primary" onClick={handleDownloadReceipt}>
                  📥 Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;