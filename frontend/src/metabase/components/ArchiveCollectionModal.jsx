import React from "react";
import { connect } from "react-redux";
import { Box, Flex, Text } from "rebass";
import { withRouter } from "react-router";
import { t } from "c-3po";

import Button from "metabase/components/Button";
import ModalContent from "metabase/components/ModalContent.jsx";

import { setCollectionArchived } from "metabase/questions/collections";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setCollectionArchived,
};

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class ArchiveCollectionModal extends React.Component {
  async _archive() {
    try {
      await this.props.setCollectionArchived(this.props.params.collectionId);
    } catch (error) {}
  }
  render() {
    return (
      <ModalContent
        title={t`Archive this collection?`}
        onClose={() => this.props.onClose()}
      >
        <Box px={3}>
          <Text>
            {t`The dashboards, collections, and pulses in this colleciton will also be archived.`}
          </Text>
          <Flex py={3}>
            <Button warning ml="auto" onClick={() => this._archive()}>
              {t`Archive`}
            </Button>
          </Flex>
        </Box>
      </ModalContent>
    );
  }
}

export default ArchiveCollectionModal;
