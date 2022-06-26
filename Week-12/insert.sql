-- Insert into the cities
use warehouse;
ALTER TABLE cities AUTO_INCREMENT=1001;
insert into cities(CITY, STATE) values ('Pune','Maharastra');
insert into cities(CITY, STATE) values ('Itanagar', 'Arunachal Pradesh');
insert into cities(CITY, STATE) values ('Dispur', 'Assam');
insert into cities(CITY, STATE) values ('Patna', 'Bihar');
insert into cities(CITY, STATE) values ('Raipur', 'Chhattisgarh');

-- Insert into warehouses
use warehouse;
ALTER TABLE warehouses AUTO_INCREMENT=2001;
insert into warehouses(WNAME, LOCATION, CID) values 
('W01','Pune01', "1001"),
('W02','Pune02', "1001"),
('W03','Pune03', "1001"),
('W04','Itanagar01', "1002"),
('W05','Itanagar02', "1002"),
('W06','Dispur01', "1003"),
('W07','Dispur02', "1003"),
('W08','Patna01', "1003"),
('W09','Patna02', "1004");

-- Insert into stores
use warehouse;
ALTER TABLE stores AUTO_INCREMENT=3001;
insert into stores(STORE_NAME, LOCATION_CITY, WID) values 
('S01','AMRTVT_ANDRA01', "2001"),
('S02','AMRTVT_ANDRA02', "2001"),
('S03','ITNGR_ARNCP01', "2004"),
('S04','ITNGR_ARNCP02', "2004"),
('S05','ITNGR_ARNCP03', "2004"),
('S06','Dispur_ASSM01', "2006"),
('S07','Dispur_ASSM02', "2007"),
('S08','PTNA_BHR01', "2009"),
('S09','PTNA_BHR02', "2009");

-- Insert into customer
use warehouse;
ALTER TABLE customer AUTO_INCREMENT=4001;
insert into customer(CNAME, ADDR, CU_CITY) values 
('Mr. Patil','Gandhi Nagar', "Amaravati"),
('Sahil Senapthy','Nehru Nagar', "Amaravati"),
('Yateesh Reddy','Housing Board', "Itanagar"),
('Aishwarya Tripathy','Park Street', "Dispur"),
('Pranshu Sharma','BTM Layout', "Dispur"),
('Vasu Vallabh','Banshankari', "Patna"),
('Vinay Prakash','Silk Board', "Patna"),
('Deepak Verma','Bank Colony', "Raipur"),
('Ashutosh Padhy','Sarojini Nagar', "Raipur");

-- Insert into orders
use warehouse;
ALTER TABLE orders AUTO_INCREMENT=5001;
insert into orders(ODATE, CNO) values 
('2022-01-15', "4001"),
('2022-02-22', "4001"),
('2022-03-09', "4001"),
('2022-03-11', "4005"),
('2022-04-27', "4005"),
('2022-05-13', "4003"),
('2022-06-10', "4006"),
('2022-06-17', "4007"),
('2022-07-04', "4009");

-- Insert into items
use warehouse;
ALTER TABLE items AUTO_INCREMENT=6001;
insert into items(DESCRIPTION, WEIGHT, COST) values 
('Apples', '2.00', '440.00'),
('Avocado', '2.00', '360.00'),
('Black Grape', '5.00', '400.00'),
('Cherry', '0.50', '300.00'),
('Date', '1', '480.00'),
('Jackfruit', '2.00', '340.00'),
('Papaya', '1', '230.00'),
('Pear', '1', '185.00'),
('Watermelon', '1', '25.00');

-- Insert into ordered_quantity
use warehouse;
ALTER TABLE ordered_quantity AUTO_INCREMENT=7001;
insert into ordered_quantity(ITEMNO, ONO) values 
('6001', '5001' ),
('6001', '5002'),
('6003', '5003'),
('6003', '5004'),
('6005', '5006'),
('6006', '5006'),
('6007', '5007'),
('6007', '5008'),
('6008', '5009');

-- Insert into quantity
use warehouse;
ALTER TABLE quantity AUTO_INCREMENT=8001;
insert into quantity(SID, ITEMNO) values 
('3001', '6001' ),
('3001', '6002'),
('3003', '6003'),
('3003', '6004'),
('3005', '6006'),
('3006', '6006'),
('3007', '6007'),
('3007', '6008'),
('3008', '6009');