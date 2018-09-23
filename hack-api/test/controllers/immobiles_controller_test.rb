require 'test_helper'

class ImmobilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @immobile = immobiles(:one)
  end

  test "should get index" do
    get immobiles_url, as: :json
    assert_response :success
  end

  test "should create immobile" do
    assert_difference('Immobile.count') do
      post immobiles_url, params: { immobile: { animal: @immobile.animal, avatar: @immobile.avatar, description: @immobile.description, price: @immobile.price, title: @immobile.title, wich: @immobile.wich } }, as: :json
    end

    assert_response 201
  end

  test "should show immobile" do
    get immobile_url(@immobile), as: :json
    assert_response :success
  end

  test "should update immobile" do
    patch immobile_url(@immobile), params: { immobile: { animal: @immobile.animal, avatar: @immobile.avatar, description: @immobile.description, price: @immobile.price, title: @immobile.title, wich: @immobile.wich } }, as: :json
    assert_response 200
  end

  test "should destroy immobile" do
    assert_difference('Immobile.count', -1) do
      delete immobile_url(@immobile), as: :json
    end

    assert_response 204
  end
end
