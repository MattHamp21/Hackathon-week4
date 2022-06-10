class Weapon < ApplicationRecord
    validates :name, presence: true
    validates :weapon_type, presence: true
    validates :game, presence: true
end

