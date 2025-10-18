/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PreparedQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * When `true` the prepared query will return connect proxy services for a queried service.  Conditions such as `tags` in the prepared query will be matched against the proxy service. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#connect PreparedQuery#connect}
  */
  readonly connect?: boolean | cdktf.IResolvable;
  /**
  * The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#datacenter PreparedQuery#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#id PreparedQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies a list of check IDs that should be ignored when filtering unhealthy instances. This is mostly useful in an emergency or as a temporary measure when a health check is found to be unreliable. Being able to ignore it in centrally-defined queries can be simpler than de-registering the check as an interim solution until the check can be fixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}
  */
  readonly ignoreCheckIds?: string[];
  /**
  * The name of the prepared query. Used to identify the prepared query during requests. Can be specified as an empty string to configure the query as a catch-all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#name PreparedQuery#name}
  */
  readonly name: string;
  /**
  * Allows specifying the name of a node to sort results near using Consul's distance sorting and network coordinates. The magic `_agent` value can be used to always sort nearest the node servicing the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#near PreparedQuery#near}
  */
  readonly near?: string;
  /**
  * Specifies a list of user-defined key/value pairs that will be used for filtering the query results to nodes with the given metadata values present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#node_meta PreparedQuery#node_meta}
  */
  readonly nodeMeta?: { [key: string]: string };
  /**
  * When `true`, the prepared query will only return nodes with passing health checks in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#only_passing PreparedQuery#only_passing}
  */
  readonly onlyPassing?: boolean | cdktf.IResolvable;
  /**
  * The name of the service to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#service PreparedQuery#service}
  */
  readonly service: string;
  /**
  * Specifies a list of user-defined key/value pairs that will be used for filtering the query results to services with the given metadata values present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#service_meta PreparedQuery#service_meta}
  */
  readonly serviceMeta?: { [key: string]: string };
  /**
  * The name of the Consul session to tie this query's lifetime to.  This is an advanced parameter that should not be used without a complete understanding of Consul sessions and the implications of their use (it is recommended to leave this blank in nearly all cases).  If this parameter is omitted the query will not expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#session PreparedQuery#session}
  */
  readonly session?: string;
  /**
  * The ACL token to store with the prepared query. This token will be used by default whenever the query is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#stored_token PreparedQuery#stored_token}
  */
  readonly storedToken?: string;
  /**
  * The list of required and/or disallowed tags.  If a tag is in this list it must be present.  If the tag is preceded with a "!" then it is disallowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#tags PreparedQuery#tags}
  */
  readonly tags?: string[];
  /**
  * The ACL token to use when saving the prepared query. This overrides the token that the agent provides by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#token PreparedQuery#token}
  */
  readonly token?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#dns PreparedQuery#dns}
  */
  readonly dns?: PreparedQueryDns;
  /**
  * failover block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#failover PreparedQuery#failover}
  */
  readonly failover?: PreparedQueryFailover;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#template PreparedQuery#template}
  */
  readonly template?: PreparedQueryTemplate;
}
export interface PreparedQueryDns {
  /**
  * The TTL to send when returning DNS results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#ttl PreparedQuery#ttl}
  */
  readonly ttl?: string;
}

export function preparedQueryDnsToTerraform(struct?: PreparedQueryDnsOutputReference | PreparedQueryDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function preparedQueryDnsToHclTerraform(struct?: PreparedQueryDnsOutputReference | PreparedQueryDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreparedQueryDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreparedQueryDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreparedQueryDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
    }
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface PreparedQueryFailoverTargets {
  /**
  * Specifies a WAN federated datacenter to forward the query to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#datacenter PreparedQuery#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Specifies a cluster peer to use for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#peer PreparedQuery#peer}
  */
  readonly peer?: string;
}

export function preparedQueryFailoverTargetsToTerraform(struct?: PreparedQueryFailoverTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    peer: cdktf.stringToTerraform(struct!.peer),
  }
}


export function preparedQueryFailoverTargetsToHclTerraform(struct?: PreparedQueryFailoverTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer: {
      value: cdktf.stringToHclTerraform(struct!.peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreparedQueryFailoverTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PreparedQueryFailoverTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreparedQueryFailoverTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._peer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._peer = value.peer;
    }
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }
}

export class PreparedQueryFailoverTargetsList extends cdktf.ComplexList {
  public internalValue? : PreparedQueryFailoverTargets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PreparedQueryFailoverTargetsOutputReference {
    return new PreparedQueryFailoverTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PreparedQueryFailover {
  /**
  * Remote datacenters to return results from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#datacenters PreparedQuery#datacenters}
  */
  readonly datacenters?: string[];
  /**
  * Return results from this many datacenters, sorted in ascending order of estimated RTT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#nearest_n PreparedQuery#nearest_n}
  */
  readonly nearestN?: number;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#targets PreparedQuery#targets}
  */
  readonly targets?: PreparedQueryFailoverTargets[] | cdktf.IResolvable;
}

export function preparedQueryFailoverToTerraform(struct?: PreparedQueryFailoverOutputReference | PreparedQueryFailover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datacenters),
    nearest_n: cdktf.numberToTerraform(struct!.nearestN),
    targets: cdktf.listMapper(preparedQueryFailoverTargetsToTerraform, true)(struct!.targets),
  }
}


export function preparedQueryFailoverToHclTerraform(struct?: PreparedQueryFailoverOutputReference | PreparedQueryFailover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datacenters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nearest_n: {
      value: cdktf.numberToHclTerraform(struct!.nearestN),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targets: {
      value: cdktf.listMapperHcl(preparedQueryFailoverTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "PreparedQueryFailoverTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreparedQueryFailoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreparedQueryFailover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._nearestN !== undefined) {
      hasAnyValues = true;
      internalValueResult.nearestN = this._nearestN;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreparedQueryFailover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenters = undefined;
      this._nearestN = undefined;
      this._targets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenters = value.datacenters;
      this._nearestN = value.nearestN;
      this._targets.internalValue = value.targets;
    }
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string[]; 
  public get datacenters() {
    return this.getListAttribute('datacenters');
  }
  public set datacenters(value: string[]) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // nearest_n - computed: false, optional: true, required: false
  private _nearestN?: number; 
  public get nearestN() {
    return this.getNumberAttribute('nearest_n');
  }
  public set nearestN(value: number) {
    this._nearestN = value;
  }
  public resetNearestN() {
    this._nearestN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearestNInput() {
    return this._nearestN;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new PreparedQueryFailoverTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: PreparedQueryFailoverTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}
export interface PreparedQueryTemplate {
  /**
  * The regular expression to match with. When using `name_prefix_match`, this regex is applied against the query name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#regexp PreparedQuery#regexp}
  */
  readonly regexp: string;
  /**
  * If set to true, will cause the tags list inside the service structure to be stripped of any empty strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#remove_empty_tags PreparedQuery#remove_empty_tags}
  */
  readonly removeEmptyTags?: boolean | cdktf.IResolvable;
  /**
  * The type of template matching to perform. Currently only `name_prefix_match` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#type PreparedQuery#type}
  */
  readonly type: string;
}

export function preparedQueryTemplateToTerraform(struct?: PreparedQueryTemplateOutputReference | PreparedQueryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regexp: cdktf.stringToTerraform(struct!.regexp),
    remove_empty_tags: cdktf.booleanToTerraform(struct!.removeEmptyTags),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function preparedQueryTemplateToHclTerraform(struct?: PreparedQueryTemplateOutputReference | PreparedQueryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_empty_tags: {
      value: cdktf.booleanToHclTerraform(struct!.removeEmptyTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreparedQueryTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreparedQueryTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._removeEmptyTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeEmptyTags = this._removeEmptyTags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreparedQueryTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexp = undefined;
      this._removeEmptyTags = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexp = value.regexp;
      this._removeEmptyTags = value.removeEmptyTags;
      this._type = value.type;
    }
  }

  // regexp - computed: false, optional: false, required: true
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // remove_empty_tags - computed: false, optional: true, required: false
  private _removeEmptyTags?: boolean | cdktf.IResolvable; 
  public get removeEmptyTags() {
    return this.getBooleanAttribute('remove_empty_tags');
  }
  public set removeEmptyTags(value: boolean | cdktf.IResolvable) {
    this._removeEmptyTags = value;
  }
  public resetRemoveEmptyTags() {
    this._removeEmptyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeEmptyTagsInput() {
    return this._removeEmptyTags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query consul_prepared_query}
*/
export class PreparedQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_prepared_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PreparedQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PreparedQuery to import
  * @param importFromId The id of the existing PreparedQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PreparedQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_prepared_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/prepared_query consul_prepared_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PreparedQueryConfig
  */
  public constructor(scope: Construct, id: string, config: PreparedQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_prepared_query',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.22.1',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connect = config.connect;
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._ignoreCheckIds = config.ignoreCheckIds;
    this._name = config.name;
    this._near = config.near;
    this._nodeMeta = config.nodeMeta;
    this._onlyPassing = config.onlyPassing;
    this._service = config.service;
    this._serviceMeta = config.serviceMeta;
    this._session = config.session;
    this._storedToken = config.storedToken;
    this._tags = config.tags;
    this._token = config.token;
    this._dns.internalValue = config.dns;
    this._failover.internalValue = config.failover;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect - computed: false, optional: true, required: false
  private _connect?: boolean | cdktf.IResolvable; 
  public get connect() {
    return this.getBooleanAttribute('connect');
  }
  public set connect(value: boolean | cdktf.IResolvable) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_check_ids - computed: false, optional: true, required: false
  private _ignoreCheckIds?: string[]; 
  public get ignoreCheckIds() {
    return this.getListAttribute('ignore_check_ids');
  }
  public set ignoreCheckIds(value: string[]) {
    this._ignoreCheckIds = value;
  }
  public resetIgnoreCheckIds() {
    this._ignoreCheckIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCheckIdsInput() {
    return this._ignoreCheckIds;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // near - computed: false, optional: true, required: false
  private _near?: string; 
  public get near() {
    return this.getStringAttribute('near');
  }
  public set near(value: string) {
    this._near = value;
  }
  public resetNear() {
    this._near = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearInput() {
    return this._near;
  }

  // node_meta - computed: false, optional: true, required: false
  private _nodeMeta?: { [key: string]: string }; 
  public get nodeMeta() {
    return this.getStringMapAttribute('node_meta');
  }
  public set nodeMeta(value: { [key: string]: string }) {
    this._nodeMeta = value;
  }
  public resetNodeMeta() {
    this._nodeMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetaInput() {
    return this._nodeMeta;
  }

  // only_passing - computed: false, optional: true, required: false
  private _onlyPassing?: boolean | cdktf.IResolvable; 
  public get onlyPassing() {
    return this.getBooleanAttribute('only_passing');
  }
  public set onlyPassing(value: boolean | cdktf.IResolvable) {
    this._onlyPassing = value;
  }
  public resetOnlyPassing() {
    this._onlyPassing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyPassingInput() {
    return this._onlyPassing;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_meta - computed: false, optional: true, required: false
  private _serviceMeta?: { [key: string]: string }; 
  public get serviceMeta() {
    return this.getStringMapAttribute('service_meta');
  }
  public set serviceMeta(value: { [key: string]: string }) {
    this._serviceMeta = value;
  }
  public resetServiceMeta() {
    this._serviceMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMetaInput() {
    return this._serviceMeta;
  }

  // session - computed: false, optional: true, required: false
  private _session?: string; 
  public get session() {
    return this.getStringAttribute('session');
  }
  public set session(value: string) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // stored_token - computed: false, optional: true, required: false
  private _storedToken?: string; 
  public get storedToken() {
    return this.getStringAttribute('stored_token');
  }
  public set storedToken(value: string) {
    this._storedToken = value;
  }
  public resetStoredToken() {
    this._storedToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedTokenInput() {
    return this._storedToken;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new PreparedQueryDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: PreparedQueryDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // failover - computed: false, optional: true, required: false
  private _failover = new PreparedQueryFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }
  public putFailover(value: PreparedQueryFailover) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new PreparedQueryTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: PreparedQueryTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect: cdktf.booleanToTerraform(this._connect),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      ignore_check_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreCheckIds),
      name: cdktf.stringToTerraform(this._name),
      near: cdktf.stringToTerraform(this._near),
      node_meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeMeta),
      only_passing: cdktf.booleanToTerraform(this._onlyPassing),
      service: cdktf.stringToTerraform(this._service),
      service_meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._serviceMeta),
      session: cdktf.stringToTerraform(this._session),
      stored_token: cdktf.stringToTerraform(this._storedToken),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      token: cdktf.stringToTerraform(this._token),
      dns: preparedQueryDnsToTerraform(this._dns.internalValue),
      failover: preparedQueryFailoverToTerraform(this._failover.internalValue),
      template: preparedQueryTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect: {
        value: cdktf.booleanToHclTerraform(this._connect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_check_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreCheckIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      near: {
        value: cdktf.stringToHclTerraform(this._near),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodeMeta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      only_passing: {
        value: cdktf.booleanToHclTerraform(this._onlyPassing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._serviceMeta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      session: {
        value: cdktf.stringToHclTerraform(this._session),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stored_token: {
        value: cdktf.stringToHclTerraform(this._storedToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: preparedQueryDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PreparedQueryDnsList",
      },
      failover: {
        value: preparedQueryFailoverToHclTerraform(this._failover.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PreparedQueryFailoverList",
      },
      template: {
        value: preparedQueryTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PreparedQueryTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
