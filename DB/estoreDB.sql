create schema estore;
create table estore.categories(
id int not null,
category varchar(45) default null,
parent_category_id int default null,
primary key(id));
insert into estore.categories(id,category,parent_category_id) values
(1,'Mens',null),
(2,'Women',null),
(3,'Kids',null),
(4,'Casual Wear',1),
(5,'Party Wear',2),
(6,'Foot Wear',2),
(7,'Accessories',3);

select * from estore.categories;
 create table estore.products(
 id int not null,
 product_name varchar(45) default null,
 product_description varchar(100) default null,
 price decimal(10,0) default null,
 ratings int default null,
 category_id int default null,
 product_img varchar(45),
 primary key(id),
 Key FK_Products_Categories_id(category_id),
 constraint FK_Products_Categories
 foreign key (category_id) references estore.categories(id)
 on update cascade on delete cascade);

 select * from estore.products;
 
 insert into estore.products(id,product_name,product_description,price,ratings,category_id,product_img) values
 (1,'Jacket','Best jacket',1000,5,5,'jacket1.jpg'),
 (2,'Bag','Best bag',1000,4.5,7,'jacket1.jpg'),
 (3,'Purse','Best purse',1000,3,5,'jacket1.jpg'),
 (4,'Dress','Best dress',1000,5,4,'jacket1.jpg'),
 (5,'Laced','Best laced',1000,4,6,'jacket1.jpg'),
 (6,'Back pack','Best back',1000,7,5,'jacket1.jpg'),
 (7,'Ear Ring','Best ear',1000,5,1,'jacket1.jpg'),
 (8,'Scarf','Best scarf',1000,4,2,'jacket1.jpg'),
 (9,'Boots','Best boots',1000,4.5,7,'jacket1.jpg'),
 (10,'Tommy','Best tommy',1000,3.5,3,'jacket1.jpg');
 
 insert into estore.categories(id,category,parent_category_id) values
(9,'Mansoon offer',8);

select * from estore.products;

   insert into estore.products(id,product_name,product_description,price,ratings,category_id,product_img) values
 (12,'Hair ring','Best Ring',2000,4,3,'jacket2.jpg');
 
UPDATE estore.products
SET category_id=3
WHERE id=1;

alter table estore.products add column keywords text null;

select * from estore.products;

update estore.products set category_id = 4 where id= 1;
update estore.products set keywords = 'bag,dress,purse' where id= 2;
update estore.products set keywords = 'tommy,boots,shoes' where id= 3;
update estore.products set keywords = 'ring,hair,ear' where id= 4;
update estore.products set keywords = 'back,scarf,laced' where id= 5;
update estore.products set keywords = 'shoes,purse,laced' where id= 6;

update estore.products set keywords = 'jacket,bag,purse' where id= 7;
update estore.products set keywords = 'bag,dress,purse' where id= 8;
update estore.products set keywords = 'tommy,boots,shoes' where id= 9;
update estore.products set keywords = 'ring,hair,ear' where id= 10;
update estore.products set keywords = 'back,scarf,laced' where id= 11;
update estore.products set keywords = 'shoes,purse,laced' where id= 12;

update estore.products set category_id = 7 where id= 12;
