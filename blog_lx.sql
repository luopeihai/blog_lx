DROP TABLE IF EXISTS `lx_user`; #用户
CREATE TABLE IF NOT EXISTS `lx_user`(
   `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
   `uid` CHAR(255) NOT NULL DEFAULT '' COMMENT 'uid',
   `name` varchar(30) DEFAULT NULL COMMENT '姓名', 
   `admin_name` varchar(30) DEFAULT NULL COMMENT '管理员账号', 
   `password` varchar(100) NOT NULL COMMENT '密码', 
   `created_at` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '创建时间',
   `updated_at` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '创建时间',
   `deleted_at` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '删除时间'
)ENGINE = InnoDB DEFAULT CHARSET = utf8;


DROP TABLE IF EXISTS `lx_works`; #作品
CREATE TABLE IF NOT EXISTS `lx_works`(
   `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
   `uid` CHAR(255) NOT NULL DEFAULT '' COMMENT 'uid',
   `title` varchar(100) DEFAULT NULL COMMENT '标题', 
   `description` varchar(200) DEFAULT NULL COMMENT '描述', 
   `cover` varchar(100) NOT NULL COMMENT '封面', 
   `pics` TEXT COMMENT '图片集', 
   `text_md` TEXT COMMENT '说明(富文本)', 
   `created_at` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '创建时间',
   `updated_at` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '创建时间',
   `deleted_at` INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '删除时间'
)ENGINE = InnoDB DEFAULT CHARSET = utf8;
