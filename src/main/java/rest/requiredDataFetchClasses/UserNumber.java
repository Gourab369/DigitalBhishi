package rest.requiredDataFetchClasses;

import java.util.Objects;

public class UserNumber {
    private String number;
    public UserNumber(){}
    public UserNumber(String number){
        this.number=number;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserNumber that = (UserNumber) o;
        return Objects.equals(number, that.number);
    }

    @Override
    public int hashCode() {
        return Objects.hash(number);
    }

}
