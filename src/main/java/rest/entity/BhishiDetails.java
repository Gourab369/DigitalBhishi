package rest.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
public class BhishiDetails {

    @Id
    @GeneratedValue
    private int bhishiID;
    private LocalDateTime startDate;
    private LocalDate maturityDate;
    private int LoanId;
    private boolean isActive;
    private boolean loanStatus;
    private int inactiveDays;
    private String terminationStatus;
    private double premiumAmount;

    public BhishiDetails(LocalDateTime startDate, LocalDate maturityDate, int loanId, boolean isActive, boolean loanStatus, int inactiveDays, String terminationStatus, double premiumAmount) {
        this.startDate = startDate;
        this.maturityDate = maturityDate;
        LoanId = loanId;
        this.isActive = isActive;
        this.loanStatus = loanStatus;
        this.inactiveDays = inactiveDays;
        this.terminationStatus = terminationStatus;
        this.premiumAmount = premiumAmount;
    }

    public BhishiDetails() {
    }

    public void setBhishiID(int bhishiID) {
        this.bhishiID = bhishiID;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public void setMaturityDate(LocalDate maturityDate) {
        this.maturityDate = maturityDate;
    }

    public void setLoanId(int loanId) {
        LoanId = loanId;
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
        return bhishiID;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public LocalDate getMaturityDate() {
        return maturityDate;
    }

    public int getLoanId() {
        return LoanId;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BhishiDetails that = (BhishiDetails) o;
        return bhishiID == that.bhishiID && LoanId == that.LoanId && isActive == that.isActive && loanStatus == that.loanStatus && inactiveDays == that.inactiveDays && Double.compare(that.premiumAmount, premiumAmount) == 0 && Objects.equals(startDate, that.startDate) && Objects.equals(maturityDate, that.maturityDate) && Objects.equals(terminationStatus, that.terminationStatus);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bhishiID, startDate, maturityDate, LoanId, isActive, loanStatus, inactiveDays, terminationStatus, premiumAmount);
    }
}
