package rest.controller;

import java.util.Objects;

public class Otpclass {
    private String otp;

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    @Override
    public String toString() {
        return "Otpclass{" +
                "otp='" + otp + '\'' +
                '}';
    }

    public Otpclass(String otp) {
        this.otp = otp;
    }
    public Otpclass(){}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Otpclass otpclass = (Otpclass) o;
        return Objects.equals(otp, otpclass.otp);
    }

    @Override
    public int hashCode() {
        return Objects.hash(otp);
    }
}
