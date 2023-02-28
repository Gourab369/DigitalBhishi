package rest.controller;

import java.util.Objects;

public class CustomerVerify {
    private String mobileNumber;
    private String aadharNumber;
    private String adminAadharNumber;
    public CustomerVerify(){
        mobileNumber="9875697762";
        aadharNumber="111111111111";
        adminAadharNumber="111111111111";
    }
    public CustomerVerify(String mobileNumber, String aadharNumber, String adminAadharNumber) {
        this.mobileNumber = mobileNumber;
        this.aadharNumber = aadharNumber;
        this.adminAadharNumber = adminAadharNumber;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getAadharNumber() {
        return aadharNumber;
    }

    public void setAadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
    }

    public String getAdminAadharNumber() {
        return adminAadharNumber;
    }

    public void setAdminAadharNumber(String adminAadharNumber) {
        this.adminAadharNumber = adminAadharNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CustomerVerify that = (CustomerVerify) o;
        return mobileNumber.equals(that.mobileNumber) && aadharNumber.equals(that.aadharNumber) && adminAadharNumber.equals(that.adminAadharNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(mobileNumber, aadharNumber, adminAadharNumber);
    }
}
