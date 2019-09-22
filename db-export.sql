/*
SQLyog - Free MySQL GUI v5.14
Host - 5.0.15-nt : Database - test
*********************************************************************
Server version : 5.0.15-nt
*/

SET NAMES utf8;

SET SQL_MODE='';

create database if not exists `test`;

USE `test`;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';

/*Table structure for table `project` */

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `project_id` int(11) NOT NULL auto_increment,
  `project_name` varchar(20) default NULL,
  `priority` int(11) default NULL,
  `start_date` date default NULL,
  `end_date` date default NULL,
  `active_flag` varchar(20) default NULL,
  PRIMARY KEY  (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `task` */

DROP TABLE IF EXISTS `task`;

CREATE TABLE `task` (
  `task_id` int(11) NOT NULL auto_increment,
  `task` varchar(20) default NULL,
  `parent_id` int(11) default NULL,
  `start_date` date default NULL,
  `end_date` date default NULL,
  `active_flag` varchar(20) default NULL,
  `priority` int(11) default NULL,
  `project_id` int(11) default NULL,
  PRIMARY KEY  (`task_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Table structure for table `user_details` */

DROP TABLE IF EXISTS `user_details`;

CREATE TABLE `user_details` (
  `user_id` int(11) NOT NULL auto_increment,
  `first_name` varchar(20) default NULL,
  `last_name` varchar(20) default NULL,
  `employee_id` int(11) default NULL,
  `project_id` int(11) default NULL,
  `task_id` int(11) default NULL,
  `active_flag` varchar(20) default NULL,
  PRIMARY KEY  (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET SQL_MODE=@OLD_SQL_MODE;