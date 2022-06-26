-- Find the item that has minimum weight.  
select * from items Order By WEIGHT asc limit 1;

-- Find the different warehouses in “Pune”,
select warehouses.*, cities.CITY from warehouses 
	INNER JOIN cities On cities.CID = warehouses.CID and cities.CITY = 'Pune';
    
-- Find the details of items ordered by a customer “Mr. Patil”
SELECT C.CNAME, C.CNO, O.ONO, O.ODATE, I.DESCRIPTION, I.WEIGHT, I.COST from orders as O 
	INNER JOIN customer as C ON O.CNO = C.CNO and CNAME="Mr. Patil"
	INNER JOIN ordered_quantity as OQ ON OQ.ONO = O.ONO
	INNER JOIN items as I on I.ITEMNO = OQ.ITEMNO;

-- Find a Warehouse which has maximum stores
SELECT count(S.SID), S.STORE_NAME, S.LOCATION_CITY, W.WNAME FROM warehouses as W 
	INNER JOIN stores AS S ON W.WID = S.WID 
    GROUP BY W.WID 
    ORDER BY count(S.SID) 
    DESC LIMIT 1;

-- Find an item which is ordered for a minimum number of times
select count(OQ.ONO), I.DESCRIPTION, I.WEIGHT, I.COST from ordered_quantity as OQ 
	INNER JOIN items AS I ON OQ.ITEMNO = I.ITEMNO
	GROUP BY OQ.ITEMNO 
    ORDER BY count(OQ.ONO) asc limit 1;
    
-- Find the detailed orders given by each customer
SELECT C.CNO, C.CNAME, O.ODATE, I.DESCRIPTION, I.WEIGHT, I.COST FROM customer AS C
	INNER JOIN orders AS O ON C.CNO=O.CNO
	INNER JOIN ordered_quantity AS OQ ON OQ.ONO = O.ONO
	INNER JOIN items AS I ON I.ITEMNO = OQ.ITEMNO 
    ORDER BY C.CNO ASC