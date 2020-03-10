import React, { useMemo, useState, useCallback, Fragment } from 'react'
import { Form, Input, Upload, Icon, Modal, Button } from 'ant-man'
import CSSModules from 'react-css-modules'
import FooterBtns from 'components/FooterBtns'
import styles from '../index.module.styl'

import { BASE_COL_COUNT, SINGLE_COL_LAYOUT } from '../config'

const { TextArea } = Input

const Appeal = props => {
  const { form, onOk, onCancel, dispatch } = props || {}
  const { getFieldDecorator, validateFields, getFieldValue, setFieldsValue } = form

  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ])

  const handlePreview = useCallback(file => {
    setPreviewImage(file.url || file.thumbUrl)
    setPreviewVisible(true)
  }, [])

  const handleChange = useCallback(
    ({ fileList }) => {
      setFileList(fileList)
    },
    [fileList]
  )

  const handleSubmit = useCallback(e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        onOk(values)
      }
    })
  }, [])

  const uploadButton = useMemo(
    () => (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传文件</div>
      </div>
    ),
    []
  )

  const checkLenth = useMemo(
    () => <div> {`${getFieldValue('reasons') ? getFieldValue('reasons').length : 0}/200`}</div>,
    [form]
  )

  const hanleText = val => {
    console.log(99999, val)
  }

  return useMemo(
    () => (
      <div styleName="appealModal">
        <Form onSubmit={handleSubmit}>
          <Form.Item label="申诉原因" {...BASE_COL_COUNT} extra={checkLenth}>
            {getFieldDecorator('reasons', {
              rules: [
                {
                  required: true,
                  message: '不能为空',
                  max: 200,
                  message: '申诉原因不能超过200个字'
                }
              ]
            })(<TextArea rows={4} placehodles="请填写申诉原因" />)}
          </Form.Item>
          <Form.Item label="上传证明材料" {...BASE_COL_COUNT}>
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length <= 6 && uploadButton}
            </Upload>
          </Form.Item>
          <FooterBtns classNames="tr">
            <Button onClick={() => onCancel()}>取消</Button>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </FooterBtns>
        </Form>

        <Modal visible={previewVisible} footer={null} onCancel={() => setPreviewVisible(false)}>
          <img
            alt="example"
            style={{
              width: '100%'
            }}
            src={previewImage}
          />
        </Modal>
      </div>
    ),
    [form, previewVisible, fileList]
  )
}

export default Form.create({ name: 'AppealForm' })(CSSModules(Appeal, styles, { allowMultiple: true }))
