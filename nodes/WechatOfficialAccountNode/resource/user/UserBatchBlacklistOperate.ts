import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import RequestUtils from '../../../help/utils/RequestUtils';
import NodeUtils from "../../../help/utils/NodeUtils";
import {ResourceOperations} from "../../../help/type/IResource";

const UserBatchBlacklistOperate  : ResourceOperations = {
	name: '拉黑用户',
	value: 'user:batchBlacklist',
	description: '拉黑一批用户',
	options: [
		{
			displayName: 'OpenID列表',
			name: 'openid_list',
			required: true,
			description: '需要拉入黑名单的用户的openid，一次拉黑最多允许20个',
			type: 'fixedCollection',
			default: [],
			typeOptions: {
				multipleValues: true,
			},
			options: [
				{
					name: 'values',
					displayName: '列表',
					values: [
						{
							displayName: 'Openid',
							name: 'id',
							type: 'string',
							default: '',
							required: true,
						},
					],
				},
			],
		},
	],
	async call(this: IExecuteFunctions, index: number): Promise<IDataObject> {
		const openid_list = NodeUtils.getNodeFixedCollectionList(this.getNodeParameter('openid_list', index) as IDataObject, 'values', 'id');

		const body: IDataObject = {
			openid_list: openid_list,
		};

		return RequestUtils.request.call(this, {
			method: 'POST',
			url: `/cgi-bin/tags/members/batchblacklist`,
			body,
		});
	}
};

export default UserBatchBlacklistOperate;
