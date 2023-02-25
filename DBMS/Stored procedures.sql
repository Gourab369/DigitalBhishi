drop procedure if exists insertAdminDetails;
delimiter $$
create procedure InsertAdminDetails(firstName varchar(40),middleName varchar(40),lastName varchar(40),
mobilenumber varchar(10),alternateNumber varchar(10),aadharNumber varchar(12),
aadharPic varchar(200),panNumber varchar(13),panPic varchar(200),addressId int)
BEGIN
	declare EXIT handler for 1062 select "User Already Exists!!" as 'Error';
	insert into adminDetails values(default,firstName,middleName,lastName,mobilenumber,
	alternateNumber,aadharNumber,aadharPic,panNumber,panPic,addressId);
END $$
delimiter ;


drop procedure if exists updateAdminDetails;
delimiter $$
create procedure UpdateAdminDetails(p_adminId int,p_firstName varchar(40),p_middleName varchar(40),
p_lastName varchar(40),p_mobilenumber varchar(10),p_alternateNumber varchar(10),
p_aadharNumber varchar(12),p_aadharPic varchar(200),p_panNumber varchar(13),
p_panPic varchar(200),p_addressId int)
BEGIN
	update adminDetails set firstName=p_adminId,middleName=p_middleName,lastName=p_lastName,
    mobilenumber=p_mobilenumber,alternateNumber=p_alternateNumber,aadharNumber=p_aadharNumber,
    aadharPic=p_aadharPic,panNumber=p_panNumber,panPic=p_panPic,addressId=p_addressId
    where adminId=p_adminId;
END $$
delimiter ;


drop procedure if exists deleteAdminDetails;
delimiter $$
create procedure DeleteAdminDetails(p_adminId int)
BEGIN
	delete from adminDetails where adminId=p_adminId;
END $$
delimiter ;


drop procedure if exists getOneAdminDetails;
delimiter $$
create procedure getOneAdminDetails(p_adminId int)
BEGIN
	select * from adminDetails where adminId=p_adminId;
END $$
delimiter ;


drop procedure if exists getAllAdminDetails;
delimiter $$
create procedure getAllAdminDetails()
BEGIN
	select * from adminDetails;
END $$
delimiter ;


drop procedure if exists insertcustomerDetails;
delimiter $$
create procedure InsertcustomerDetails(firstName varchar(40),middleName varchar(40),lastName varchar(40),
mobilenumber varchar(10),alternateNumber varchar(10),aadharNumber varchar(12),aadharPic varchar(200),
guarantor1Aadhar varchar(12),guarantor2Aadhar varchar(12),addressId int,adminId int,bhishiId int,
documentId int)
BEGIN
	declare EXIT handler for 1062 select "User Already Exists!!" as 'Error';
	insert into adminDetails values(default,firstName,middleName,lastName,mobilenumber,
	alternateNumber,aadharNumber,aadharPic,guarantor1Aadhar,guarantor2Aadhar,addressId,adminId,bhishiId,documentId);
END $$
delimiter ;


drop procedure if exists updatecustomerDetails;
delimiter $$
create procedure updatecustomerDetails(p_customerId  int,p_firstName varchar(40),p_middleName varchar(40),
p_lastName varchar(40),p_mobilenumber varchar(10),p_alternateNumber varchar(10),p_aadharNumber varchar(12),
p_aadharPic varchar(200),p_guarantor1Aadhar varchar(12),p_guarantor2Aadhar varchar(12),p_addressId int,p_adminId int,
p_bhishiId int,p_documentId int)
BEGIN
	update customerDetails set firstName=p_firstName,middleName=p_middleName,lastName=p_middleName,mobilenumber=p_mobilenumber,
	alternateNumber=p_alternateNumber,aadharNumber=p_aadharNumber,aadharPic=p_aadharPic,guarantor1Aadhar=p_guarantor1Aadhar,
    guarantor2Aadhar=p_guarantor2Aadhar,addressId=p_addressId,adminId=p_adminId,bhishiId=p_bhishiId,documentId=p_documentId
    where customerId =p_customerId ;
END $$
delimiter ;


drop procedure if exists deletecustomerDetails;
delimiter $$
create procedure deletecustomerDetails(p_customerId int)
BEGIN
	delete from customerDetails where customerId=p_customerId;
END $$
delimiter ;


drop procedure if exists getOneCustomerDetails;
delimiter $$
create procedure getOneCustomerDetails(p_customerId int)
BEGIN
	select * from customerDetails where customerId=p_customerId;
END $$
delimiter ;


drop procedure if exists getAllCustomerDetails;
delimiter $$
create procedure getAllCustomerDetails()
BEGIN
	select * from customerDetails;
END $$
delimiter ;



drop procedure if exists insertAddress;
delimiter $$
create procedure insertAddress(street varchar(40),locality varchar(40),cityOrVillage varchar(40),
tahasil varchar(40) ,district varchar(40),state varchar(40),zipCode varchar(6))
BEGIN
	declare EXIT handler for 1062 select "Address Already Exists!!" as 'Error';
	insert into addresses values(default,street,locality,cityOrVillage,tahasil,district,state,zipCode);
END $$
delimiter ;


drop procedure if exists updateAddress;
delimiter $$
create procedure updateAddress(p_addressId int,p_street varchar(40),p_locality varchar(40),
p_cityOrVillage varchar(40),p_tahasil varchar(40),p_district varchar(40),p_state varchar(40),
p_zipCode varchar(6))
BEGIN
	update addresses set street=p_street,locality=p_locality,cityOrVillage=p_cityOrVillage,
    tahasil=p_tahasil,district=p_district,state=p_state,zipCode=p_zipCode 
    where addressId=p_addressId;
END $$
delimiter ;


drop procedure if exists deleteAdminDetails;
delimiter $$
create procedure DeleteAdminDetails(p_adminId int)
BEGIN
	delete from adminDetails where adminId=p_adminId;
END $$
delimiter ;


drop procedure if exists getOneAdminDetails;
delimiter $$
create procedure getOneAdminDetails(p_adminId int)
BEGIN
	select * from adminDetails where adminId=p_adminId;
END $$
delimiter ;


drop procedure if exists getAllAdminDetails;
delimiter $$
create procedure getAllAdminDetails()
BEGIN
	select * from adminDetails;
END $$
delimiter ;







