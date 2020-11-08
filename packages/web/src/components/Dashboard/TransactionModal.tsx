import { routes } from '@wavegrid/common/constants'
import moment from 'moment'
import React from 'react'
import { FlexboxGrid, Icon, Modal, Panel } from 'rsuite'
import {
  Product,
  Transaction,
  useGetFileUrlsQuery,
  useTransactionProductsQuery,
} from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import { ProductSquare } from '../Product'

interface Props {
  show: boolean
  setShow: Function
  onClose?: Function
  transaction?: Transaction
}

const TransactionModal = ({ show, setShow, onClose, transaction }: Props) => {
  const { go } = useGo()
  const {
    data: transactionProductsData,
    loading: transactionProductsLoading,
  } = useTransactionProductsQuery({
    skip: !transaction?.id,
    variables: {
      where: {
        id: transaction?.id,
      },
    },
  })

  const { data: filesJSON, loading: filesJSONLoading } = useGetFileUrlsQuery({
    skip: !!!transactionProductsData?.transaction?.licenseKey,
    variables: {
      licenseKey: transactionProductsData?.transaction?.licenseKey!,
    },
  })

  return (
    <Modal
      overflow={true}
      show={show}
      onHide={() => setShow(false)}
      onExited={() => onClose?.()}
    >
      <Modal.Header>
        <Modal.Title>View Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={24}>
            <Panel bordered>
              <div>
                <b>Transaction ID:</b> {transaction?.id}
              </div>
              {transactionProductsData?.transaction?.licenseKey && (
                <div>
                  <b>License Key (Redeemed):</b>{' '}
                  {transactionProductsData?.transaction?.licenseKey}
                </div>
              )}
              <div>
                <b>Purchased on:</b>{' '}
                {moment(transaction?.createdAt).format('MM/DD/YYYY hh:mma')}
              </div>
              <div>
                <b>Price:</b> ${transaction?.amount.toFixed(2)}
              </div>
              <div>
                <b>Downloads:</b>
                {filesJSON?.getFileURLs ? (
                  JSON.parse(filesJSON.getFileURLs).urls.map((urlObj) => {
                    return (
                      <div>
                        <a href={urlObj?.url}>{urlObj.name}</a>
                      </div>
                    )
                  })
                ) : filesJSONLoading || transactionProductsLoading ? (
                  <p
                    style={{
                      padding: '16px 4px',
                      color: '#999',
                    }}
                  >
                    <Icon icon="spinner" spin /> Loading...
                  </p>
                ) : (
                  <div className="used-key-text">
                    These links have expired. Contact support if this was a
                    mistake.
                  </div>
                )}
              </div>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={20}>
            <FlexboxGrid justify="start">
              {transactionProductsData?.transaction?.products.map((product) => {
                return (
                  <>
                    <FlexboxGrid.Item colspan={12} className={'top-space'}>
                      <ProductSquare
                        responsive
                        onClick={() =>
                          go.push(routes.pack, { packId: product?.id })
                        }
                        product={product as Product}
                      />
                    </FlexboxGrid.Item>
                  </>
                )
              })}
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Modal.Body>
    </Modal>
  )
}

export default TransactionModal
