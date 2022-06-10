# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Character.create(name:'Kratos', age:1050, game:'God of War')
Character.create(name:'Cayde-6', age:126, game:'Destiny')
Character.create(name:'Master Cheif', age:40, game:'Halo')
Character.create(name:'Kal Kestis', age:18, game:'Jedi: Fallen Order')
Character.create(name:'Lara Croft', age:26, game:'Tomb Raider')

Game.create(name:'Destiny 2', year:2017, genre:'FPS')
Game.create(name:'Dark Souls', year:2011, genre:'Dungeon Crawl, RPG')
Game.create(name:'Forza Motorsport 6', year:2015, genre:'Racing')
Game.create(name:'Battlefront 2', year:2005, genre:'FPS')
Game.create(name:'Hearts of Iron IV', year:2016, genre:'Strategy')

Weapon.create(name:'Ace of Spades', weapon_type:'Firearm', game:'Destiny 2')
Weapon.create(name:'Exile Greatsword', weapon_type:'Sword', game:'Dark Souls 3')
Weapon.create(name:'Le Monarque', weapon_type:'Bow', game:'Destiny 2')
Weapon.create(name:'The Master Sword', weapon_type:'Sword', game:'The Legend of Zelda')
Weapon.create(name:'The Chaperone', weapon_type:'Firearm', game:'Destiny 2')
