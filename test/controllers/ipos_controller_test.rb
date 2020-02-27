require 'test_helper'

class IposControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ipos_index_url
    assert_response :success
  end

  test "should get show" do
    get ipos_show_url
    assert_response :success
  end

  test "should get create" do
    get ipos_create_url
    assert_response :success
  end

  test "should get edit" do
    get ipos_edit_url
    assert_response :success
  end

  test "should get new" do
    get ipos_new_url
    assert_response :success
  end

  test "should get update" do
    get ipos_update_url
    assert_response :success
  end

  test "should get destroy" do
    get ipos_destroy_url
    assert_response :success
  end

end
