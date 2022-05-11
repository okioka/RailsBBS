require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe '#create' do
    before do
      @comment = FactoryBot.build(:comment)
    end

    context '投稿がうまくいく場合' do
      it "nameとcommentが存在すれば投稿できる" do
        @comment.name = "テストユーザー"
        @comment.comment = "テスト投稿"
        expect(@comment).to be_valid
      end
    end
    
    context '投稿がうまくいかない場合' do
      it "名前が空だと投稿できない" do
        @comment.name = nil
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Name can't be blank")
      end
      it "コメントが空だと投稿できない" do
        @comment.comment = nil
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Comment can't be blank")
      end
    end
  end
end
