package rest.entity;

import java.util.Objects;

public class CustomerDetailsWithAdminAadharNumber {
    private CustomerDetails customerDetails;
    private String adminAadharNumber;
    public CustomerDetailsWithAdminAadharNumber(){

    }

    public CustomerDetailsWithAdminAadharNumber(CustomerDetails customerDetails, String adminAadharNumber) {
        this.customerDetails = customerDetails;
        this.adminAadharNumber = adminAadharNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CustomerDetailsWithAdminAadharNumber that = (CustomerDetailsWithAdminAadharNumber) o;
        return customerDetails.equals(that.customerDetails) && adminAadharNumber.equals(that.adminAadharNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(customerDetails, adminAadharNumber);
    }

    public CustomerDetails getCustomerDetails() {
        return customerDetails;
    }

    public void setCustomerDetails(CustomerDetails customerDetails) {
        this.customerDetails = customerDetails;
    }

    public String getAdminAadharNumber() {
        return adminAadharNumber;
    }

    public void setAdminAadharNumber(String adminAadharNumber) {
        this.adminAadharNumber = adminAadharNumber;
    }
}
