# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :recipes, dependent: :destroy
end
