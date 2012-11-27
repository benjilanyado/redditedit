# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Section.delete_all
Section.create([
	{anchor:"#siteTable .entry a.title",id:1,name:"World News",range:"0..2",source_anchor:"#siteTable .domain a.title",url:"http://www.reddit.com/r/worldnews"},
{anchor:"#siteTable .entry a.title",id:2,name:"Politics",range:"0..2",source_anchor:"",url:"http://www.reddit.com/r/politics"},
{anchor:"#siteTable .entry a.title",id:3,name:"Technology",range:"0..2",source_anchor:"",url:"http://www.reddit.com/r/technology"},
{anchor:"#siteTable .entry a.title",id:5,name:"Science",range:"0..2",source_anchor:"",url:"http://www.reddit.com/r/science"},
{anchor:"#siteTable .entry a.title",id:6,name:"Reddit Front",range:"0..2",source_anchor:"",url:"http://www.reddit.com/"},
{anchor:"#siteTable .entry a.title",id:7,name:"Pics",range:"0..2",source_anchor:"",url:"http://www.reddit.com/r/pics/"},
{anchor:"#item-bbc li a",id:8,name:"BBC",range:"0..2",source_anchor:"",url:"http://top5news.co.uk/"},
{anchor:"ul h3 a",id:9,name:"Buzzfeed",range:"0..2",source_anchor:"",url:"http://www.buzzfeed.com/top/viral"},
{anchor:"#chartbt_mod li h3 a",id:10,name:"Fox News",range:"0..2",source_anchor:"",url:"http://www.foxnews.com/trending/"},
{anchor:"#most-viewed li a",id:11,name:"Guardian",range:"0..2",source_anchor:"",url:"http://www.guardiannews.com/"},
{anchor:".snp_entry_title",id:12,name:"Huffington Post",range:"0..2",source_anchor:"",url:"http://www.huffingtonpost.com/?country=US"},
{anchor:".mostPopularList li a",id:13,name:"NY Times",range:"10..12",source_anchor:"",url:"http://www.nytimes.com/most-popular"},
{anchor:"ul.accordion li a",id:14,name:"Washington Post",range:"1..3",source_anchor:"",url:"http://www.washingtonpost.com/?nav=globaltop"},
{anchor:"#mvtab0 tr td a",id:15,name:"Wall Street Journal",range:"0..2",source_anchor:"",url:"http://online.wsj.com/public/page/most_popular.html"},
{anchor:".most-popular-ul h4 a",id:16,name:"Yahoo! News",range:"0..2",source_anchor:"",url:"http://news.yahoo.com/most-popular"}
])