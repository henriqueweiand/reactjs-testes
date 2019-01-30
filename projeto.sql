/*
 Navicat MySQL Data Transfer

 Source Server         : db1
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost
 Source Database       : projeto

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : utf-8

 Date: 01/30/2019 14:36:20 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `adonis_schema`
-- ----------------------------
DROP TABLE IF EXISTS `adonis_schema`;
CREATE TABLE `adonis_schema` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `adonis_schema`
-- ----------------------------
BEGIN;
INSERT INTO `adonis_schema` VALUES ('41', '1503250034279_user', '1', '2019-01-30 16:31:44'), ('42', '1503250034280_token', '1', '2019-01-30 16:31:44'), ('43', '1547056944350_domain_schema', '1', '2019-01-30 16:31:44'), ('44', '1547058253609_user_domain_schema', '1', '2019-01-30 16:31:44'), ('45', '1548857539728_create_permissions_table', '1', '2019-01-30 16:31:44'), ('46', '1548857539749_create_roles_table', '1', '2019-01-30 16:31:44'), ('47', '1548857539759_create_permission_role_table', '1', '2019-01-30 16:31:45'), ('48', '1548857539761_create_permission_user_table', '1', '2019-01-30 16:31:45'), ('49', '1548857539763_create_role_user_table', '1', '2019-01-30 16:31:45');
COMMIT;

-- ----------------------------
--  Table structure for `domains`
-- ----------------------------
DROP TABLE IF EXISTS `domains`;
CREATE TABLE `domains` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(254) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `domains`
-- ----------------------------
BEGIN;
INSERT INTO `domains` VALUES ('1', 'WeRide', '2019-01-30 14:31:50', '2019-01-30 14:31:50');
COMMIT;

-- ----------------------------
--  Table structure for `permission_role`
-- ----------------------------
DROP TABLE IF EXISTS `permission_role`;
CREATE TABLE `permission_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int(10) unsigned DEFAULT NULL,
  `role_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permission_role_permission_id_index` (`permission_id`),
  KEY `permission_role_role_id_index` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `permission_role`
-- ----------------------------
BEGIN;
INSERT INTO `permission_role` VALUES ('1', '1', '1', null, null), ('2', '2', '1', null, null), ('3', '2', '2', null, null);
COMMIT;

-- ----------------------------
--  Table structure for `permission_user_domain`
-- ----------------------------
DROP TABLE IF EXISTS `permission_user_domain`;
CREATE TABLE `permission_user_domain` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int(10) unsigned DEFAULT NULL,
  `user_domain_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permission_user_domain_permission_id_index` (`permission_id`),
  KEY `permission_user_domain_user_domain_id_index` (`user_domain_id`),
  CONSTRAINT `permission_user_domain_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `permission_user_domain_user_domain_id_foreign` FOREIGN KEY (`user_domain_id`) REFERENCES `user_domains` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `permissions`
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_slug_unique` (`slug`),
  UNIQUE KEY `permissions_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `permissions`
-- ----------------------------
BEGIN;
INSERT INTO `permissions` VALUES ('1', 'empresa_create', 'Criar empresa', null, '2019-01-30 14:31:50', '2019-01-30 14:31:50'), ('2', 'empresa_edit', 'Editar empresa', null, '2019-01-30 14:31:50', '2019-01-30 14:31:50');
COMMIT;

-- ----------------------------
--  Table structure for `role_user_domain`
-- ----------------------------
DROP TABLE IF EXISTS `role_user_domain`;
CREATE TABLE `role_user_domain` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(10) unsigned DEFAULT NULL,
  `user_domain_id` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role_user_domain_role_id_index` (`role_id`),
  KEY `role_user_domain_user_domain_id_index` (`user_domain_id`),
  CONSTRAINT `role_user_domain_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_user_domain_user_domain_id_foreign` FOREIGN KEY (`user_domain_id`) REFERENCES `user_domains` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `role_user_domain`
-- ----------------------------
BEGIN;
INSERT INTO `role_user_domain` VALUES ('1', '1', '1', null, null);
COMMIT;

-- ----------------------------
--  Table structure for `roles`
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_slug_unique` (`slug`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `roles`
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES ('1', 'adinistrador', 'Administrador', null, '2019-01-30 14:31:50', '2019-01-30 14:31:50'), ('2', 'empresa', 'Empresa', null, '2019-01-30 14:31:50', '2019-01-30 14:31:50');
COMMIT;

-- ----------------------------
--  Table structure for `tokens`
-- ----------------------------
DROP TABLE IF EXISTS `tokens`;
CREATE TABLE `tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tokens_token_unique` (`token`),
  KEY `tokens_user_id_foreign` (`user_id`),
  KEY `tokens_token_index` (`token`),
  CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `user_domains`
-- ----------------------------
DROP TABLE IF EXISTS `user_domains`;
CREATE TABLE `user_domains` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `domain_id` int(10) unsigned NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_domains_user_id_foreign` (`user_id`),
  KEY `user_domains_domain_id_foreign` (`domain_id`),
  CONSTRAINT `user_domains_domain_id_foreign` FOREIGN KEY (`domain_id`) REFERENCES `domains` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_domains_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `user_domains`
-- ----------------------------
BEGIN;
INSERT INTO `user_domains` VALUES ('1', '1', '1', '2019-01-30 14:31:50', '2019-01-30 14:31:50');
COMMIT;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', 'Henrique Weiand', 'henriqueweiand@gmail.com', '$2a$10$Cort4eftG7ppHDr6awlMj.3rp73mE8PTie6C1UYQFjnwcGmSqvtoC', '2019-01-30 14:31:49', '2019-01-30 14:31:49');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
