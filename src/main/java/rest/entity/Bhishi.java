package rest.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Bhishi {

    @Id
    @GeneratedValue
    private int bhishiId;
    private LocalDateTime startDate;
    private LocalDate maturityDate;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true) // attributes are necessary
    @JoinColumn(name="LoanId")
    private Loan loan;

    @OneToOne(mappedBy = "bhishi")
    private Customer customer;
    private boolean isActive;
    private boolean loanStatus;
    private int inactiveDays;
    private String terminationStatus;
    private double premiumAmount;

    public Bhishi(LocalDateTime startDate, LocalDate maturityDate, Loan loan, boolean isActive, boolean loanStatus, int inactiveDays, String terminationStatus, double premiumAmount) {
        this.startDate = startDate;
        this.maturityDate = maturityDate;
        this.loan = loan;
        this.isActive = isActive;
        this.loanStatus = loanStatus;
        this.inactiveDays = inactiveDays;
        this.terminationStatus = terminationStatus;
        this.premiumAmount = premiumAmount;
    }

    public Bhishi() {
    }

    public void setBhishiID(int bhishiId) {
        this.bhishiId = bhishiId;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public void setMaturityDate(LocalDate maturityDate) {
        this.maturityDate = maturityDate;
    }


    public void setActive(boolean active) {
        isActive = active;
    }

    public void setLoanStatus(boolean loanStatus) {
        this.loanStatus = loanStatus;
    }

    public void setInactiveDays(int inactiveDays) {
        this.inactiveDays = inactiveDays;
    }

    public void setTerminationStatus(String terminationStatus) {
        this.terminationStatus = terminationStatus;
    }

    public void setPremiumAmount(double premiumAmount) {
        this.premiumAmount = premiumAmount;
    }

    public int getBhishiID() {
        return bhishiId;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public LocalDate getMaturityDate() {
        return maturityDate;
    }

    public boolean isActive() {
        return isActive;
    }

    public boolean isLoanStatus() {
        return loanStatus;
    }

    public int getInactiveDays() {
        return inactiveDays;
    }

    public String getTerminationStatus() {
        return terminationStatus;
    }

    public double getPremiumAmount() {
        return premiumAmount;
    }

    public Loan getLoanDetails() {
        return loan;
    }

    
    public void setLoanDetails(Loan loan) {
        this.loan = loan;
    }

}
